import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import './observableValue.js';
import './storedValue.js';
import './testTypes.js';
define(
			de[1001],
			he([1, 0, 6, 215, 3, 5, 21, 810, 515, 185]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TestFilterTerm = e.$yLc = e.$xLc = void 0),
					(e.$xLc = (0, E.$Mi)("testingFilterState"));
				const u = /!?@([^ ,:]+)/g,
					a = (g) => g.replace(/\s\s+/g, " ").trim();
				let h = class extends w.$1c {
					constructor(p) {
						super(),
							(this.c = p),
							(this.a = new t.$re()),
							(this.b = {}),
							(this.globList = []),
							(this.includeTags = new Set()),
							(this.excludeTags = new Set()),
							(this.text = this.D(new d.$qqc(""))),
							(this.fuzzy = this.D(
								d.$qqc.stored(
									new m.$oqc(
										{
											key: "testHistoryFuzzy",
											scope: C.StorageScope.PROFILE,
											target: C.StorageTarget.USER,
										},
										this.c,
									),
									!1,
								),
							)),
							(this.reveal = this.D(new d.$qqc(void 0))),
							(this.onDidRequestInputFocus = this.a.event);
					}
					focusInput() {
						this.a.fire();
					}
					setText(p) {
						if (p === this.text.value) return;
						(this.b = {}),
							(this.globList = []),
							this.includeTags.clear(),
							this.excludeTags.clear();
						let o = "",
							f = 0;
						for (const b of p.matchAll(u)) {
							let s = b.index + b[0].length;
							const l = b[0];
							if ((n.includes(l) && (this.b[l] = !0), p[s] === ":")) {
								s++;
								let y = p[s];
								y !== '"' && y !== "'" ? (y = " ") : s++;
								let $ = "";
								for (; s < p.length && p[s] !== y; )
									p[s] === "\\"
										? (($ += p[s + 1]), (s += 2))
										: (($ += p[s]), s++);
								b[0].startsWith("!")
									? this.excludeTags.add((0, r.$p4)(b[1], $))
									: this.includeTags.add((0, r.$p4)(b[1], $)),
									s++;
							}
							(o += p.slice(f, b.index)), (f = s);
						}
						if (((o += p.slice(f).trim()), o.length))
							for (const b of (0, i.$Hk)(o, ",")
								.map((s) => s.trim())
								.filter((s) => !!s.length))
								b.startsWith("!")
									? this.globList.push({
											include: !1,
											text: b.slice(1).toLowerCase(),
										})
									: this.globList.push({ include: !0, text: b.toLowerCase() });
						this.text.value = p;
					}
					isFilteringFor(p) {
						return !!this.b[p];
					}
					toggleFilteringFor(p, o) {
						const f = this.text.value.trim();
						o !== !1 && !this.b[p]
							? this.setText(f ? `${f} ${p}` : p)
							: o !== !0 && this.b[p] && this.setText(a(f.replace(p, "")));
					}
				};
				(e.$yLc = h), (e.$yLc = h = Ne([j(0, C.$lq)], h));
				var c;
				(function (g) {
					(g.Failed = "@failed"),
						(g.Executed = "@executed"),
						(g.CurrentDoc = "@doc"),
						(g.OpenedFiles = "@openedFiles"),
						(g.Hidden = "@hidden");
				})(c || (e.TestFilterTerm = c = {}));
				const n = [c.Failed, c.Executed, c.CurrentDoc, c.OpenedFiles, c.Hidden];
			},
		),
		