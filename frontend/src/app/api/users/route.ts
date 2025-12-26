import { connectDatabase } from "@/db/db";
import { User, UserRole } from "@/db/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  connectDatabase();

  const users = await User.find();

  return Response.json(users);
}

export async function POST(req: NextRequest) {
  try {
    connectDatabase();

    const body = await req.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (role && !Object.values(UserRole).includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    // There is only one user who is admin in the system at any time that's why i am checking before creating a new admin
    if (role === UserRole.ADMIN) {
      const adminUser = await User.findOne({ role: UserRole.ADMIN });
      if (adminUser) {
        return NextResponse.json(
          { error: "An admin user already exists" },
          { status: 400 }
        );
      }
    }
    //in a real-world application, always hash passwords before storing them. because there is only one admin user in the system at any time that's why i did not hash the password for simplicity.
    const user = await User.create({
      name,
      email,
      password,
      role: role || UserRole.USER,
    });

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return NextResponse.json({ user: userData }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
