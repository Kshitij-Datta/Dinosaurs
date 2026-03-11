const POPULAR_DINOSAURS = [
  "Tyrannosaurus",
  "Velociraptor",
  "Stegosaurus",
  "Triceratops",
  "Brachiosaurus",
  "Diplodocus",
  "Spinosaurus",
  "Ankylosaurus",
  "Allosaurus",
  "Iguanodon",
  "Parasaurolophus",
  "Carnotaurus",
  "Archaeopteryx",
  "Apatosaurus",
];

let cachedDinosaurList = null;

/**
 * Fetch a paginated list of dinosaur genera from PBDB.
 * @param {number} offset - starting index
 * @param {number} limit - number of items to return
 * @returns {Promise<Array<{id:string|number, name:string, rank:string, period:string}>>}
 */
export async function fetchDinosaurs(offset = 0, limit = 50) {
  const safeOffset = Math.max(0, Number(offset) || 0);
  const safeLimit = Math.max(1, Math.min(200, Number(limit) || 50));

  try {
    if (!cachedDinosaurList) {
      const res = await fetch(
        `https://paleobiodb.org/data1.2/taxa/list.json?base_name=Dinosauria&rel=all_children&rank=genus&status=valid&limit=5000`,
      );

      if (!res.ok) {
        console.error("PBDB request failed with status", res.status);
        return [];
      }

      const data = await res.json();
      const records = Array.isArray(data?.records) ? data.records : [];

      const normalizedDinos = records
        .filter((r) => !(r?.nam ?? "").toLowerCase().includes("synonym"))
        .map((record) => {
          const cleanId = record?.oid
            ? String(record.oid).replace("txn:", "")
            : "Unknown";
          return {
            id: cleanId,
            name: record?.nam ?? "Unknown",
            rank: record?.rnk ?? "genus",
            period: record?.tdf ?? "Mesozoic",
          };
        });

      normalizedDinos.sort((a, b) => {
        const indexA = POPULAR_DINOSAURS.indexOf(a.name);
        const indexB = POPULAR_DINOSAURS.indexOf(b.name);

        if (indexA !== -1 && indexB !== -1) return indexA - indexB;

        if (indexA !== -1) return -1;

        if (indexB !== -1) return 1;
        return a.name.localeCompare(b.name);
      });

      cachedDinosaurList = normalizedDinos;
    }

    return cachedDinosaurList.slice(safeOffset, safeOffset + safeLimit);
  } catch (err) {
    console.error("Fetch Dinosaurs failed:", err);
    return [];
  }
}
