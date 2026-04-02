

import React from "react";


export interface Ingredient {
  id: string;
  name: string;
  diets: ("G" | "L" | "V")[];
}

interface Props {
  ingredient: Ingredient;
}

const dietLabels: Record<"G" | "L" | "V", string> = {
  G: "Gluten-Free",
  L: "Lactose-Free",
  V: "Vegan",
};

const dietColors: Record<"G" | "L" | "V", string> = {
  G: "#4CAF50",
  L: "#2196F3",
  V: "#9C27B0",
};

const IngredientCard: React.FC<Props> = ({ ingredient }) => {
  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <h3 style={styles.title}>{ingredient.name}</h3>
      </div>

      <div style={styles.tagsContainer}>
        {ingredient.diets.map((diet) => (
          <span
            key={diet}
            style={{
              ...styles.tag,
              backgroundColor: dietColors[diet],
            }}
          >
            {dietLabels[diet]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IngredientCard;


const styles: Record<string, React.CSSProperties> = {
  card: {
    width: "160px",
    height: "160px",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    backgroundColor: "#fff",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    cursor: "pointer",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
  },
  title: {
    fontSize: "1rem",
    fontWeight: 600,
    margin: 0,
    color: "#333",
  },
  tagsContainer: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tag: {
    fontSize: "0.7rem",
    padding: "2px 6px",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: 500,
  },
};