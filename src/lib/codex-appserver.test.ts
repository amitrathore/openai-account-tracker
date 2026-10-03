import { describe, expect, it } from "vitest";
import { parseAvailableResetCount } from "./codex-appserver";

describe("parseAvailableResetCount", () => {
  it("reads a valid count from the app-server credit summary", () => {
    expect(parseAvailableResetCount({ availableCount: 3, credits: [] })).toBe(3);
    expect(parseAvailableResetCount({ availableCount: 0, credits: null })).toBe(0);
  });

  it("keeps unavailable or invalid counts out of the UI", () => {
    expect(parseAvailableResetCount(null)).toBeUndefined();
    expect(parseAvailableResetCount({})).toBeUndefined();
    expect(parseAvailableResetCount({ availableCount: -1 })).toBeUndefined();
    expect(parseAvailableResetCount({ availableCount: "2" })).toBeUndefined();
  });
});
