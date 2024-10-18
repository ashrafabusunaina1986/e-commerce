import Link from "next/link";
import React from "react";

export default function ListTools({
  user,
  className,
  MenusItems,
  clsLink,
  setShowSheet,
}) {
  return (
    <div className={className || ""}>
      {MenusItems.map((menuitem) =>
        menuitem.s ? (
          <Link
            className={clsLink || ""}
            key={menuitem.l}
            href={menuitem.p}
            onClick={() => (setShowSheet ? setShowSheet(false) : {})}
          >
            {menuitem.l}
          </Link>
        ) : null
      )}
    </div>
  );
}
