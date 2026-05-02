import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function ConfirmModal({
  open,
  title,
  description,
  onCancel,
  onConfirm,
}) {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-md">

        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>

          {description && (
            <DialogDescription>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <DialogFooter className="flex gap-2 sm:justify-end">

          <Button
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={onConfirm}
          >
            Yes, Logout
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}