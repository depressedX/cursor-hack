import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/idGenerator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uint.js';
import '../../../common/core/range.js';
import '../../../../nls.js';
define(
			de[541],
			he([1, 0, 29, 6, 584, 3, 59, 19, 37, 210, 17, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*event*/,
 w /*idGenerator*/,
 E /*lifecycle*/,
 C /*map*/,
 d /*resources*/,
 m /*strings*/,
 r /*uint*/,
 u /*range*/,
 a /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pNb = e.$oNb = e.$nNb = e.$mNb = void 0),
					(m = mt(m));
				class h {
					constructor(o, f, b, s) {
						(this.isProviderFirst = o),
							(this.parent = f),
							(this.link = b),
							(this.d = s),
							(this.id = w.$Sdb.nextId());
					}
					get uri() {
						return this.link.uri;
					}
					get range() {
						return this.c ?? this.link.targetSelectionRange ?? this.link.range;
					}
					set range(o) {
						(this.c = o), this.d(this);
					}
					get ariaMessage() {
						const o = this.parent.getPreview(this)?.preview(this.range);
						return o
							? (0, a.localize)(
									1155,
									null,
									o.value,
									(0, d.$kh)(this.uri),
									this.range.startLineNumber,
									this.range.startColumn,
								)
							: (0, a.localize)(
									1154,
									null,
									(0, d.$kh)(this.uri),
									this.range.startLineNumber,
									this.range.startColumn,
								);
					}
				}
				e.$mNb = h;
				class c {
					constructor(o) {
						this.c = o;
					}
					dispose() {
						this.c.dispose();
					}
					preview(o, f = 8) {
						const b = this.c.object.textEditorModel;
						if (!b) return;
						const {
								startLineNumber: s,
								startColumn: l,
								endLineNumber: y,
								endColumn: $,
							} = o,
							v = b.getWordUntilPosition({ lineNumber: s, column: l - f }),
							S = new u.$iL(s, v.startColumn, s, l),
							I = new u.$iL(y, $, y, r.Constants.MAX_SAFE_SMALL_INTEGER),
							T = b.getValueInRange(S).replace(/^\s+/, ""),
							P = b.getValueInRange(o),
							k = b.getValueInRange(I).replace(/\s+$/, "");
						return {
							value: T + P + k,
							highlight: { start: T.length, end: T.length + P.length },
						};
					}
				}
				e.$nNb = c;
				class n {
					constructor(o, f) {
						(this.parent = o),
							(this.uri = f),
							(this.children = []),
							(this.c = new C.$Gc());
					}
					dispose() {
						(0, E.$Vc)(this.c.values()), this.c.clear();
					}
					getPreview(o) {
						return this.c.get(o.uri);
					}
					get ariaMessage() {
						const o = this.children.length;
						return o === 1
							? (0, a.localize)(
									1156,
									null,
									(0, d.$kh)(this.uri),
									this.uri.fsPath,
								)
							: (0, a.localize)(
									1157,
									null,
									o,
									(0, d.$kh)(this.uri),
									this.uri.fsPath,
								);
					}
					async resolve(o) {
						if (this.c.size !== 0) return this;
						for (const f of this.children)
							if (!this.c.has(f.uri))
								try {
									const b = await o.createModelReference(f.uri);
									this.c.set(f.uri, new c(b));
								} catch (b) {
									(0, t.$4)(b);
								}
						return this;
					}
				}
				e.$oNb = n;
				class g {
					constructor(o, f) {
						(this.groups = []),
							(this.references = []),
							(this._onDidChangeReferenceRange = new i.$re()),
							(this.onDidChangeReferenceRange =
								this._onDidChangeReferenceRange.event),
							(this.c = o),
							(this.d = f);
						const [b] = o;
						o.sort(g.e);
						let s;
						for (const l of o)
							if (
								((!s || !d.$dh.isEqual(s.uri, l.uri, !0)) &&
									((s = new n(this, l.uri)), this.groups.push(s)),
								s.children.length === 0 ||
									g.e(l, s.children[s.children.length - 1]) !== 0)
							) {
								const y = new h(b === l, s, l, ($) =>
									this._onDidChangeReferenceRange.fire($),
								);
								this.references.push(y), s.children.push(y);
							}
					}
					dispose() {
						(0, E.$Vc)(this.groups),
							this._onDidChangeReferenceRange.dispose(),
							(this.groups.length = 0);
					}
					clone() {
						return new g(this.c, this.d);
					}
					get title() {
						return this.d;
					}
					get isEmpty() {
						return this.groups.length === 0;
					}
					get ariaMessage() {
						return this.isEmpty
							? (0, a.localize)(1158, null)
							: this.references.length === 1
								? (0, a.localize)(1159, null, this.references[0].uri.fsPath)
								: this.groups.length === 1
									? (0, a.localize)(
											1160,
											null,
											this.references.length,
											this.groups[0].uri.fsPath,
										)
									: (0, a.localize)(
											1161,
											null,
											this.references.length,
											this.groups.length,
										);
					}
					nextOrPreviousReference(o, f) {
						const { parent: b } = o;
						let s = b.children.indexOf(o);
						const l = b.children.length,
							y = b.parent.groups.length;
						return y === 1 || (f && s + 1 < l) || (!f && s > 0)
							? (f ? (s = (s + 1) % l) : (s = (s + l - 1) % l), b.children[s])
							: ((s = b.parent.groups.indexOf(b)),
								f
									? ((s = (s + 1) % y), b.parent.groups[s].children[0])
									: ((s = (s + y - 1) % y),
										b.parent.groups[s].children[
											b.parent.groups[s].children.length - 1
										]));
					}
					nearestReference(o, f) {
						const b = this.references
							.map((s, l) => ({
								idx: l,
								prefixLen: m.$Of(s.uri.toString(), o.toString()),
								offsetDist:
									Math.abs(s.range.startLineNumber - f.lineNumber) * 100 +
									Math.abs(s.range.startColumn - f.column),
							}))
							.sort((s, l) =>
								s.prefixLen > l.prefixLen
									? -1
									: s.prefixLen < l.prefixLen
										? 1
										: s.offsetDist < l.offsetDist
											? -1
											: s.offsetDist > l.offsetDist
												? 1
												: 0,
							)[0];
						if (b) return this.references[b.idx];
					}
					referenceAt(o, f) {
						for (const b of this.references)
							if (
								b.uri.toString() === o.toString() &&
								u.$iL.containsPosition(b.range, f)
							)
								return b;
					}
					firstReference() {
						for (const o of this.references) if (o.isProviderFirst) return o;
						return this.references[0];
					}
					static e(o, f) {
						return (
							d.$dh.compare(o.uri, f.uri) ||
							u.$iL.compareRangesUsingStarts(o.range, f.range)
						);
					}
				}
				e.$pNb = g;
			},
		),
		