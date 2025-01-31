import '../../../../require.js';
import '../../../../exports.js';
define(de[1524], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$psb = void 0),
				(e.$qsb = E);
			class t {
				static {
					this.items = [];
				}
				constructor(m, r) {
					(this.key = m), (this.migrate = r);
				}
				apply(m) {
					const r = t.a(m, this.key),
						u = (h) => t.a(m, h),
						a = (h, c) => t.b(m, h, c);
					this.migrate(r, u, a);
				}
				static a(m, r) {
					if (typeof m > "u") return;
					const u = r.indexOf(".");
					if (u >= 0) {
						const a = r.substring(0, u);
						return this.a(m[a], r.substring(u + 1));
					}
					return m[r];
				}
				static b(m, r, u) {
					const a = r.indexOf(".");
					if (a >= 0) {
						const h = r.substring(0, a);
						(m[h] = m[h] || {}), this.b(m[h], r.substring(a + 1), u);
						return;
					}
					m[r] = u;
				}
			}
			e.$psb = t;
			function i(d, m) {
				t.items.push(new t(d, m));
			}
			function w(d, m) {
				i(d, (r, u, a) => {
					if (typeof r < "u") {
						for (const [h, c] of m)
							if (r === h) {
								a(d, c);
								return;
							}
					}
				});
			}
			function E(d) {
				t.items.forEach((m) => m.apply(d));
			}
			w("wordWrap", [
				[!0, "on"],
				[!1, "off"],
			]),
				w("lineNumbers", [
					[!0, "on"],
					[!1, "off"],
				]),
				w("cursorBlinking", [["visible", "solid"]]),
				w("renderWhitespace", [
					[!0, "boundary"],
					[!1, "none"],
				]),
				w("renderLineHighlight", [
					[!0, "line"],
					[!1, "none"],
				]),
				w("acceptSuggestionOnEnter", [
					[!0, "on"],
					[!1, "off"],
				]),
				w("tabCompletion", [
					[!1, "off"],
					[!0, "onlySnippets"],
				]),
				w("hover", [
					[!0, { enabled: !0 }],
					[!1, { enabled: !1 }],
				]),
				w("parameterHints", [
					[!0, { enabled: !0 }],
					[!1, { enabled: !1 }],
				]),
				w("autoIndent", [
					[!1, "advanced"],
					[!0, "full"],
				]),
				w("matchBrackets", [
					[!0, "always"],
					[!1, "never"],
				]),
				w("renderFinalNewline", [
					[!0, "on"],
					[!1, "off"],
				]),
				w("cursorSmoothCaretAnimation", [
					[!0, "on"],
					[!1, "off"],
				]),
				w("occurrencesHighlight", [
					[!0, "singleFile"],
					[!1, "off"],
				]),
				w("wordBasedSuggestions", [
					[!0, "matchingDocuments"],
					[!1, "off"],
				]),
				i("autoClosingBrackets", (d, m, r) => {
					d === !1 &&
						(r("autoClosingBrackets", "never"),
						typeof m("autoClosingQuotes") > "u" &&
							r("autoClosingQuotes", "never"),
						typeof m("autoSurround") > "u" && r("autoSurround", "never"));
				}),
				i("renderIndentGuides", (d, m, r) => {
					typeof d < "u" &&
						(r("renderIndentGuides", void 0),
						typeof m("guides.indentation") > "u" &&
							r("guides.indentation", !!d));
				}),
				i("highlightActiveIndentGuide", (d, m, r) => {
					typeof d < "u" &&
						(r("highlightActiveIndentGuide", void 0),
						typeof m("guides.highlightActiveIndentation") > "u" &&
							r("guides.highlightActiveIndentation", !!d));
				});
			const C = {
				method: "showMethods",
				function: "showFunctions",
				constructor: "showConstructors",
				deprecated: "showDeprecated",
				field: "showFields",
				variable: "showVariables",
				class: "showClasses",
				struct: "showStructs",
				interface: "showInterfaces",
				module: "showModules",
				property: "showProperties",
				event: "showEvents",
				operator: "showOperators",
				unit: "showUnits",
				value: "showValues",
				constant: "showConstants",
				enum: "showEnums",
				enumMember: "showEnumMembers",
				keyword: "showKeywords",
				text: "showWords",
				color: "showColors",
				file: "showFiles",
				reference: "showReferences",
				folder: "showFolders",
				typeParameter: "showTypeParameters",
				snippet: "showSnippets",
			};
			i("suggest.filteredTypes", (d, m, r) => {
				if (d && typeof d == "object") {
					for (const u of Object.entries(C))
						d[u[0]] === !1 &&
							typeof m(`suggest.${u[1]}`) > "u" &&
							r(`suggest.${u[1]}`, !1);
					r("suggest.filteredTypes", void 0);
				}
			}),
				i("quickSuggestions", (d, m, r) => {
					if (typeof d == "boolean") {
						const u = d ? "on" : "off";
						r("quickSuggestions", { comments: u, strings: u, other: u });
					}
				}),
				i("experimental.stickyScroll.enabled", (d, m, r) => {
					typeof d == "boolean" &&
						(r("experimental.stickyScroll.enabled", void 0),
						typeof m("stickyScroll.enabled") > "u" &&
							r("stickyScroll.enabled", d));
				}),
				i("experimental.stickyScroll.maxLineCount", (d, m, r) => {
					typeof d == "number" &&
						(r("experimental.stickyScroll.maxLineCount", void 0),
						typeof m("stickyScroll.maxLineCount") > "u" &&
							r("stickyScroll.maxLineCount", d));
				}),
				i("codeActionsOnSave", (d, m, r) => {
					if (d && typeof d == "object") {
						let u = !1;
						const a = {};
						for (const h of Object.entries(d))
							typeof h[1] == "boolean"
								? ((u = !0), (a[h[0]] = h[1] ? "explicit" : "never"))
								: (a[h[0]] = h[1]);
						u && r("codeActionsOnSave", a);
					}
				}),
				i("codeActionWidget.includeNearbyQuickfixes", (d, m, r) => {
					typeof d == "boolean" &&
						(r("codeActionWidget.includeNearbyQuickfixes", void 0),
						typeof m("codeActionWidget.includeNearbyQuickFixes") > "u" &&
							r("codeActionWidget.includeNearbyQuickFixes", d));
				}),
				i("lightbulb.enabled", (d, m, r) => {
					typeof d == "boolean" && r("lightbulb.enabled", d ? void 0 : "off");
				});
		})
