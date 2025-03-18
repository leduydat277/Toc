import { useState } from "react";
import { useTOCStore } from "state/stores";


export const PreviewTOC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toc = useTOCStore((state) => state);

  return (
    <div
      style={{
        backgroundColor: toc.backgroundColor,
        borderColor: toc.borderColor,
        borderStyle: "solid",
        textAlign: toc.alignment,
        maxWidth: toc.maxWidth ? `${toc.maxWidth}px` : "auto",
        padding: `${toc.padding.top}px ${toc.padding.right}px ${toc.padding.bottom}px ${toc.padding.left}px`,
      }}
    >

      <h2
        style={{
          color: toc.titleColor,
          fontSize: toc.fontSizeHeading,
          textAlign: toc.textAlignment,
        }}
      >
        {toc.title}
      </h2>


      <ul style={{ listStyleType: toc.numbering === "numbers" ? "decimal" : "none" }}>
        {toc.tag.map((item, index) => (
          <li
            key={index}
            style={{
              color: toc.colorHeading,
              fontSize: toc.fontSize,
              paddingLeft: toc.isIndentation ? "20px" : "0px",
              borderBottom: toc.isSectionLine ? `1px solid ${toc.sectionLineColor}` : "none",
            }}
          >
            Heading {item}
            <a
              href={item.link}
              style={{
                color: toc.linkColor,
                textDecoration: toc.underlineStyle,
              }}
              onMouseEnter={(e) => {
                if (toc.isCustomLinkHover) e.target.style.color = toc.hoverColor;
              }}
              onMouseLeave={(e) => {
                if (toc.isCustomLinkHover) e.target.style.color = toc.linkColor;
              }}
            >
              {item.label}
            </a>
          </li>

        ))}
      </ul>

      {/* Nút Ẩn/Hiện */}
      {toc.showHideButton && (
        <button
          style={{
            backgroundColor: "transparent",
            color: toc.isHideButton ? toc.hideButtonColor : toc.showButtonColor,
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? toc.showButtonName : toc.hideButtonName}
        </button>
      )}

      {/* Nút Show All */}
      {toc.showAllButtonName && (
        <button
          style={{
            backgroundColor: "transparent",
            color: toc.showAllButtonColor,
            border: "none",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          {toc.showAllButtonName}
        </button>
      )}
    </div>
  );
};
