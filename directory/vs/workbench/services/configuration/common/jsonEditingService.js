import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/json.js';
import '../../../../base/common/jsonEdit.js';
import '../../../../base/common/async.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/selection.js';
import '../../textfile/common/textfiles.js';
import '../../../../platform/files/common/files.js';
import '../../../../editor/common/services/resolverService.js';
import './jsonEditing.js';
import '../../../../platform/instantiation/common/extensions.js';
define(
			de[3704],
			he([1, 0, 4, 187, 586, 15, 188, 17, 104, 85, 22, 42, 423, 20]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*json*/,
 w /*jsonEdit*/,
 E /*async*/,
 C /*editOperation*/,
 d /*range*/,
 m /*selection*/,
 r /*textfiles*/,
 u /*files*/,
 a /*resolverService*/,
 h /*jsonEditing*/,
 c /*extensions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wvc = void 0),
					(t = mt(t)),
					(i = mt(i));
				let n = class {
					constructor(p, o, f) {
						(this.b = p), (this.c = o), (this.d = f), (this.a = new E.$Th());
					}
					write(p, o) {
						return Promise.resolve(this.a.queue(() => this.e(p, o)));
					}
					async e(p, o) {
						const f = await this.k(p, !0);
						try {
							await this.f(f.object.textEditorModel, o);
						} finally {
							f.dispose();
						}
					}
					async f(p, o) {
						let f = !1;
						for (const b of o) {
							const s = this.h(p, b)[0];
							f = !!s && this.g(s, p);
						}
						if (f) return this.d.save(p.uri);
					}
					g(p, o) {
						const f = o.getPositionAt(p.offset),
							b = o.getPositionAt(p.offset + p.length),
							s = new d.$iL(f.lineNumber, f.column, b.lineNumber, b.column),
							l = o.getValueInRange(s);
						if (p.content !== l) {
							const y = l
								? C.$jL.replace(s, p.content)
								: C.$jL.insert(f, p.content);
							return (
								o.pushEditOperations(
									[new m.$kL(f.lineNumber, f.column, f.lineNumber, f.column)],
									[y],
									() => [],
								),
								!0
							);
						}
						return !1;
					}
					h(p, o) {
						const { tabSize: f, insertSpaces: b } = p.getOptions(),
							s = p.getEOL(),
							{ path: l, value: y } = o;
						if (!l.length) {
							const $ = JSON.stringify(y, null, b ? " ".repeat(f) : "	");
							return [{ content: $, length: $.length, offset: 0 }];
						}
						return (0, w.$ro)(p.getValue(), l, y, {
							tabSize: f,
							insertSpaces: b,
							eol: s,
						});
					}
					async i(p) {
						return (
							(await this.b.exists(p)) ||
								(await this.d.write(p, "{}", { encoding: "utf8" })),
							this.c.createModelReference(p)
						);
					}
					j(p) {
						const o = [];
						return (
							i.$do(p.getValue(), o, {
								allowTrailingComma: !0,
								allowEmptyContent: !0,
							}),
							o.length > 0
						);
					}
					async k(p, o) {
						const f = await this.i(p),
							b = f.object.textEditorModel;
						return this.j(b)
							? (f.dispose(), this.l(h.JSONEditingErrorCode.ERROR_INVALID_FILE))
							: f;
					}
					l(p) {
						const o = this.m(p);
						return Promise.reject(new h.$_Qb(o, p));
					}
					m(p) {
						switch (p) {
							case h.JSONEditingErrorCode.ERROR_INVALID_FILE:
								return t.localize(12156, null);
						}
					}
				};
				(e.$wvc = n),
					(e.$wvc = n = Ne([j(0, u.$ll), j(1, a.$MO), j(2, r.$kZ)], n)),
					(0, c.$lK)(h.$$Qb, n, c.InstantiationType.Delayed);
			},
		)
