export interface Draggable {
  daragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DraggaTarget {
  dragOverHandler(event: DragEvent): void;
  dragHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
