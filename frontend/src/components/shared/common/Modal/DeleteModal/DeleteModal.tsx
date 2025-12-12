'use client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Loader2Icon } from 'lucide-react';

interface DeleteModalProps {
    isOpen: boolean;
    title: string;
    description: string;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

export function DeleteModal({ isOpen, title, description, onClose, onConfirm, loading }: DeleteModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={onConfirm} disabled={loading}>
                        {loading && <Loader2Icon className="h-4 w-4 animate-spin" />}
                        {loading ? 'Deleting...' : 'Delete'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
