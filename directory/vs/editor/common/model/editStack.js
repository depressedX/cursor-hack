define(
			de[780],
			he([1, 0, 4, 29, 104, 64, 155, 9, 1589, 76, 19, 48]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zU = e.$xU = e.$wU = e.$vU = void 0),
					(e.$yU = o),
					(t = mt(t)),
					(r = mt(r));
				function h(b) {
					return b.toString();
				}
				class c {
					static create(s, l) {
						const y = s.getAlternativeVersionId(),
							$ = p(s);
						return new c(y, y, $, $, l, l, []);
					}
					constructor(s, l, y, $, v, S, I) {
						(this.beforeVersionId = s),
							(this.afterVersionId = l),
							(this.beforeEOL = y),
							(this.afterEOL = $),
							(this.beforeCursorState = v),
							(this.afterCursorState = S),
							(this.changes = I);
					}
					append(s, l, y, $, v) {
						l.length > 0 && (this.changes = (0, m.$ML)(this.changes, l)),
							(this.afterEOL = y),
							(this.afterVersionId = $),
							(this.afterCursorState = v);
					}
					static c(s) {
						return 4 + 4 * 4 * (s ? s.length : 0);
					}
					static d(s, l, y) {
						if ((r.$Ye(s, l ? l.length : 0, y), (y += 4), l))
							for (const $ of l)
								r.$Ye(s, $.selectionStartLineNumber, y),
									(y += 4),
									r.$Ye(s, $.selectionStartColumn, y),
									(y += 4),
									r.$Ye(s, $.positionLineNumber, y),
									(y += 4),
									r.$Ye(s, $.positionColumn, y),
									(y += 4);
						return y;
					}
					static f(s, l, y) {
						const $ = r.$Xe(s, l);
						l += 4;
						for (let v = 0; v < $; v++) {
							const S = r.$Xe(s, l);
							l += 4;
							const I = r.$Xe(s, l);
							l += 4;
							const T = r.$Xe(s, l);
							l += 4;
							const P = r.$Xe(s, l);
							(l += 4), y.push(new w.$kL(S, I, T, P));
						}
						return l;
					}
					serialize() {
						let s =
							10 + c.c(this.beforeCursorState) + c.c(this.afterCursorState) + 4;
						for (const $ of this.changes) s += $.writeSize();
						const l = new Uint8Array(s);
						let y = 0;
						r.$Ye(l, this.beforeVersionId, y),
							(y += 4),
							r.$Ye(l, this.afterVersionId, y),
							(y += 4),
							r.$3e(l, this.beforeEOL, y),
							(y += 1),
							r.$3e(l, this.afterEOL, y),
							(y += 1),
							(y = c.d(l, this.beforeCursorState, y)),
							(y = c.d(l, this.afterCursorState, y)),
							r.$Ye(l, this.changes.length, y),
							(y += 4);
						for (const $ of this.changes) y = $.write(l, y);
						return l.buffer;
					}
					static deserialize(s) {
						const l = new Uint8Array(s);
						let y = 0;
						const $ = r.$Xe(l, y);
						y += 4;
						const v = r.$Xe(l, y);
						y += 4;
						const S = r.$2e(l, y);
						y += 1;
						const I = r.$2e(l, y);
						y += 1;
						const T = [];
						y = c.f(l, y, T);
						const P = [];
						y = c.f(l, y, P);
						const k = r.$Xe(l, y);
						y += 4;
						const L = [];
						for (let D = 0; D < k; D++) y = m.$LL.read(l, y, L);
						return new c($, v, S, I, T, P, L);
					}
				}
				e.$vU = c;
				class n {
					get type() {
						return C.UndoRedoElementType.Resource;
					}
					get resource() {
						return d.URI.isUri(this.model) ? this.model : this.model.uri;
					}
					constructor(s, l, y, $) {
						(this.label = s),
							(this.code = l),
							(this.model = y),
							(this.c = c.create(y, $));
					}
					toString() {
						return (
							this.c instanceof c ? this.c : c.deserialize(this.c)
						).changes
							.map((l) => l.toString())
							.join(", ");
					}
					matchesResource(s) {
						return (
							(d.URI.isUri(this.model)
								? this.model
								: this.model.uri
							).toString() === s.toString()
						);
					}
					setModel(s) {
						this.model = s;
					}
					canAppend(s) {
						return this.model === s && this.c instanceof c;
					}
					append(s, l, y, $, v) {
						this.c instanceof c && this.c.append(s, l, y, $, v);
					}
					close() {
						this.c instanceof c && (this.c = this.c.serialize());
					}
					open() {
						this.c instanceof c || (this.c = c.deserialize(this.c));
					}
					undo() {
						if (d.URI.isUri(this.model))
							throw new Error("Invalid SingleModelEditStackElement");
						this.c instanceof c && (this.c = this.c.serialize());
						const s = c.deserialize(this.c);
						this.model._applyUndo(
							s.changes,
							s.beforeEOL,
							s.beforeVersionId,
							s.beforeCursorState,
						);
					}
					redo() {
						if (d.URI.isUri(this.model))
							throw new Error("Invalid SingleModelEditStackElement");
						this.c instanceof c && (this.c = this.c.serialize());
						const s = c.deserialize(this.c);
						this.model._applyRedo(
							s.changes,
							s.afterEOL,
							s.afterVersionId,
							s.afterCursorState,
						);
					}
					rebase(s, l, y, $, v, S, I, T) {
						this.open();
						const P = y - (l - s),
							k = this.c,
							L = k.changes.map((N) =>
								($ ? N.newPosition : N.oldPosition) >= l ? N.shift(P) : N,
							);
						k.changes = L;
						const D = (N) =>
								N.lineNumber > v
									? new a.$hL(N.lineNumber + I, N.column)
									: N.lineNumber === v && N.column >= S
										? new a.$hL(N.lineNumber + I, N.column + T)
										: N,
							M = (N) =>
								w.$kL.fromPositions(
									D(N.getStartPosition()),
									D(N.getEndPosition()),
								);
						(k.afterCursorState = k.afterCursorState?.map(M) ?? null),
							(k.beforeCursorState = k.beforeCursorState?.map(M) ?? null),
							this.close();
					}
					heapSize() {
						return (
							this.c instanceof c && (this.c = this.c.serialize()),
							this.c.byteLength + 168
						);
					}
				}
				e.$wU = n;
				class g {
					get resources() {
						return this.d.map((s) => s.resource);
					}
					constructor(s, l, y) {
						(this.label = s),
							(this.code = l),
							(this.type = C.UndoRedoElementType.Workspace),
							(this.c = !0),
							(this.d = y.slice(0)),
							(this.f = new Map());
						for (const $ of this.d) {
							const v = h($.resource);
							this.f.set(v, $);
						}
						this.g = null;
					}
					setDelegate(s) {
						this.g = s;
					}
					prepareUndoRedo() {
						if (this.g) return this.g.prepareUndoRedo(this);
					}
					getMissingModels() {
						const s = [];
						for (const l of this.d) d.URI.isUri(l.model) && s.push(l.model);
						return s;
					}
					matchesResource(s) {
						const l = h(s);
						return this.f.has(l);
					}
					setModel(s) {
						const l = h(d.URI.isUri(s) ? s : s.uri);
						this.f.has(l) && this.f.get(l).setModel(s);
					}
					canAppend(s) {
						if (!this.c) return !1;
						const l = h(s.uri);
						return this.f.has(l) ? this.f.get(l).canAppend(s) : !1;
					}
					append(s, l, y, $, v) {
						const S = h(s.uri);
						this.f.get(S).append(s, l, y, $, v);
					}
					close() {
						this.c = !1;
					}
					open() {}
					undo() {
						this.c = !1;
						for (const s of this.d) s.undo();
					}
					redo() {
						for (const s of this.d) s.redo();
					}
					heapSize(s) {
						const l = h(s);
						return this.f.has(l) ? this.f.get(l).heapSize() : 0;
					}
					split() {
						return this.d;
					}
					toString() {
						const s = [];
						for (const l of this.d) s.push(`${(0, u.$kh)(l.resource)}: ${l}`);
						return `{${s.join(", ")}}`;
					}
				}
				e.$xU = g;
				function p(b) {
					return b.getEOL() ===
						`
`
						? E.EndOfLineSequence.LF
						: E.EndOfLineSequence.CRLF;
				}
				function o(b) {
					return b ? b instanceof n || b instanceof g : !1;
				}
				class f {
					constructor(s, l) {
						(this.c = s), (this.d = l);
					}
					pushStackElement() {
						const s = this.d.getLastElement(this.c.uri);
						o(s) && s.close();
					}
					popStackElement() {
						const s = this.d.getLastElement(this.c.uri);
						o(s) && s.open();
					}
					clear() {
						this.d.removeElements(this.c.uri);
					}
					f(s, l, y) {
						const $ = this.d.getLastElement(this.c.uri);
						if (o($) && $.canAppend(this.c) && y !== !0) return $;
						const v = new n(
							t.localize(818, null),
							"undoredo.textBufferEdit",
							this.c,
							s,
						);
						return this.d.pushElement(v, l), v;
					}
					pushEOL(s) {
						const l = this.f(null, void 0);
						this.c.setEOL(s),
							l.append(
								this.c,
								[],
								p(this.c),
								this.c.getAlternativeVersionId(),
								null,
							);
					}
					pushEditOperation(s, l, y, $, v) {
						const S = this.f(s, $, v),
							I = this.c.applyEdits(l, !0),
							T = f.g(y, I),
							P = I.map((k, L) => ({ index: L, textChange: k.textChange }));
						return (
							P.sort((k, L) =>
								k.textChange.oldPosition === L.textChange.oldPosition
									? k.index - L.index
									: k.textChange.oldPosition - L.textChange.oldPosition,
							),
							S.append(
								this.c,
								P.map((k) => k.textChange),
								p(this.c),
								this.c.getAlternativeVersionId(),
								T,
							),
							T
						);
					}
					static g(s, l) {
						try {
							return s ? s(l) : null;
						} catch (y) {
							return (0, i.$4)(y), null;
						}
					}
				}
				e.$zU = f;
			},
		),
		