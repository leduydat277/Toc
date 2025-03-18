import { useState } from "react";
import { useTOCStore } from "state/stores";
import { Text } from "@shopify/polaris";
import styles from "../../styles/toc-preview.module.scss";

export const PreviewTOC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toc = useTOCStore((state) => state);


  return (
    <div className={styles.container}>
      <Text as="h6" fontWeight="bold">
        A table of contents in the style below will be inserted into the template.
      </Text>

      <div
        className={styles.tocContainer}
        style={{
          backgroundColor: toc.backgroundColor,
          border: `1px solid ${toc.borderColor}`,
          textAlign: toc.alignment,
          maxWidth: toc.maxWidth ? `${toc.maxWidth}px` : "100%",
          padding: `${toc.padding.top}px ${toc.padding.right}px ${toc.padding.bottom}px ${toc.padding.left}px`,
        }}
      >
        <h2
          className={styles.tocTitle}
          style={{
            color: toc.titleColor,
            textAlign: toc.textAlignment,
            fontSize: `${toc.fontSize}px`,
          }}
        >
          {toc.title}
        </h2>

        {!isCollapsed && (
          <ul className={styles.tocList} style={{ listStyleType: toc.numbering }}>
            {toc.tag.map((item, index) => (
              <li
                key={index}
                className={styles.tocItem}
                style={{
                  color: toc.colorHeading,
                  fontSize: `${toc.fontSizeHeading}px`,
                  paddingLeft: toc.isIndentation ? "20px" : "0px",
                  borderBottom: toc.isSectionLine ? `1px solid ${toc.sectionLineColor}` : "none",
                }}
              >
                <a
                  href={item?.link}
                  className={styles.tocLink}
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
                  heading {item}
                </a>
              </li>
            ))}
          </ul>
        )}
        {toc.isHideButton && (
          <>
            <button
              monochrome
              outline
              size="slim"
              className={styles.toggleButton}
              style={{
                color: toc.showButtonColor,
              }}
            >
              {toc.showButtonName}
            </button>
            <button
              size="slim"
              style={{
                color: toc.hideButtonColor,
              }}
              className={styles.toggleButton}
            >
              {toc.hideButtonName}
            </button>
          </>
        )}



        {toc.showAllButtonName && (
          <button
            monochrome={true}
            outline
            size="slim"
            className={styles.showAllButton}
            style={{ color: toc.showAllButtonColor }}
          >

            {toc.showAllButtonName}
          </button>
        )}
      </div>
    </div>
  );
};
