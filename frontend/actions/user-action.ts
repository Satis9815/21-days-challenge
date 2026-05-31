"use server"

import { connectDatabase } from "@/db/db"
import { User } from "@/db/models/User"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production"

export async function registerUser(name: string, email: string, password: string) {
  try {
     connectDatabase()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return { success: false, message: "User already exists with this email" }
    }

    const newUser = await User.create({
      name,
      email,
      password,
    })

    return { success: true, message: "User registered successfully", userId: newUser._id }
  } catch (error) {
    console.error("Error registering user:", error)
    return { success: false, message: "Failed to register user" }
  }
}

export async function loginUser(email: string, password: string) {
  try {
    connectDatabase()

    const user = await User.findOne({ email }).select("+password")

    if (!user) {
      return { success: false, message: "Invalid email or password" }
    }

    const isPasswordValid = await user.comparePassword(password)

    if (!isPasswordValid) {
      return { success: false, message: "Invalid email or password" }
    }

    if (user.role !== "admin") {
      return { success: false, message: "Only admin users can access this portal" }
    }

    const token = jwt.sign({ userId: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "24h" })

    const cookieStore = await cookies()
    cookieStore.set("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60, 
    })

    return {
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    }
  } catch (error) {
    console.error("Error logging in user:", error)
    return { success: false, message: "Failed to login" }
  }
}

export async function logoutUser() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete("adminToken")
    return { success: true, message: "Logged out successfully" }
  } catch (error) {
    console.error("Error logging out:", error)
    return { success: false, message: "Failed to logout" }
  }
}

export async function verifyAdminToken() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("adminToken")?.value

    if (!token) {
      return { success: false, isAdmin: false, message: "No token found" }
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: string }

    if (decoded.role !== "admin") {
      return { success: false, isAdmin: false, message: "Not an admin user" }
    }

    return { success: true, isAdmin: true, userId: decoded.userId }
  } catch (error) {
    console.error("Error verifying token:", error)
    return { success: false, isAdmin: false, message: "Invalid or expired token" }
  }
}

export async function getUserById(userId: string) {
  try {
    connectDatabase()

    const user = await User.findById(userId).select("-password")

    if (!user) {
      return { success: false, message: "User not found" }
    }

    return { success: true, user }
  } catch (error) {
    console.error("Error fetching user:", error)
    return { success: false, message: "Failed to fetch user" }
  }
}

export async function getAllUsers() {
  try {
    connectDatabase()

    const users = await User.find().select("-password")

    return { success: true, users, count: users.length }
  } catch (error) {
    console.error("Error fetching users:", error)
    return { success: false, message: "Failed to fetch users" }
  }
}
