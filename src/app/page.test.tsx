import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Backgammon heuristics page", () => {
  it("renders the complete study-guide structure", () => {
    const html = renderToStaticMarkup(createElement(Home));

    expect(html).toContain("To Hit or Not to Hit");
    expect(html).toContain("by Dirk Schiemann");
    expect(html).toContain("Basic Concepts");
    expect(html).toContain("Hitting in the Inner Board");
    expect(html).toContain("Hitting in the Outer Board");
    expect((html.match(/<details/g) ?? [])).toHaveLength(9);
  });
});
