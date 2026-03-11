import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import TaxonomyCard from "../Components/detail/TaxonomyCard";
import GeologicalCard from "../Components/detail/GeologicalCard";
import FossilMap from "../Components/detail/FossilMap";

export default function DinoDetail() {
  const { id } = useParams();

  const [dino, setDino] = useState(null);
  const [occurrences, setOccurrences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const taxonRes = await fetch(
        `https://paleobiodb.org/data1.2/taxa/list.json?name=${id}&show=attr,app,size,phylo,ext`,
      );

      const taxonData = await taxonRes.json();

      const record = taxonData.records[0];

      const occRes = await fetch(
        `https://paleobiodb.org/data1.2/occs/list.json?base_name=${id}&show=coords,loc,time&limit=100`,
      );

      const occData = await occRes.json();

      setDino({
        name: record.nam,
        rank: record.rnk,
        period: record.tdf,
        firstApp: record.fea,
        lastApp: record.lea,
        phylum: record.phl,
        class: record.cll,
        order: record.odl,
        family: record.fml,
      });

      setOccurrences(
        occData.records.map((occ) => ({
          id: occ.oid,
          lat: occ.lat,
          lng: occ.lng,
          location: occ.cc2,
          site: occ.nln,
        })),
      );

      setLoading(false);
    }

    fetchData();
  }, [id]);

  if (loading) return <p>Loading dinosaur...</p>;

  return (
    <div style={{ paddingBottom: "80px" }}>
      <div className="container detail-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <TaxonomyCard dino={dino} />
          <GeologicalCard dino={dino} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <FossilMap dino={dino} occurrences={occurrences} />
        </div>
      </div>
    </div>
  );
}
