import type React from "react";
import { Button } from "../../components/ui/button";
import { DialogFooter, DialogHeader, Dialog, DialogContent, DialogDescription, DialogTitle } from "../../components/ui/dialog";


type DeleteConfirmDialogProps = {
  selectedGenreId: number;
  selectedGenreName: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  selectedGenreId,
  selectedGenreName,
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog 
      open={selectedGenreId? true : false} 
      onOpenChange={(open) => {
        if (!open && onCancel) {
          onCancel();
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedGenreId} {selectedGenreName}を本当に削除しますか？</DialogTitle>
          <DialogDescription>一度削除すると、このデータは元に戻せません。</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="ghost" onClick={onCancel}>キャンセル</Button>
          <Button variant="destructive" onClick={onConfirm}>削除する</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


export default DeleteConfirmDialog;