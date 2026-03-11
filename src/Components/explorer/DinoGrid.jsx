import { VirtuosoGrid } from "react-virtuoso";
import DinoCard from "./DinoCard";

export default function DinoGrid({ dinosaurs = [], virtuosoRef, loadMore }) {
  return (
    <VirtuosoGrid
      ref={virtuosoRef}
      style={{ height: "80vh" }}
      data={dinosaurs}
      endReached={loadMore}
      increaseViewportBy={600}
      listClassName="virtuoso-grid-list"
      itemContent={(index, dino) => (
        <DinoCard dino={dino} displayIndex={dino.id} />
      )}
    />
  );
}
