import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../base/common/json.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/jsonEdit.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/selection.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../textfile/common/textfiles.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../userDataProfile/common/userDataProfile.js';
define(
			de[1324],
			he([
				1, 0, 4, 15, 187, 82, 586, 3, 188, 17, 104, 42, 8, 22, 5, 85, 20, 133,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*async*/,
 w /*json*/,
 E /*objects*/,
 C /*jsonEdit*/,
 d /*lifecycle*/,
 m /*editOperation*/,
 r /*range*/,
 u /*selection*/,
 a /*resolverService*/,
 h /*contextkey*/,
 c /*files*/,
 n /*instantiation*/,
 g /*textfiles*/,
 p /*extensions*/,
 o /*userDataProfile*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fvc = e.$evc = void 0),
					(w = mt(w)),
					(E = mt(E)),
					(e.$evc = (0, n.$Mi)("keybindingEditingService"));
				let f = class extends d.$1c {
					constructor(s, l, y, $) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.c = new i.$Th());
					}
					addKeybinding(s, l, y) {
						return this.c.queue(() => this.m(s, l, y, !0));
					}
					editKeybinding(s, l, y) {
						return this.c.queue(() => this.m(s, l, y, !1));
					}
					resetKeybinding(s) {
						return this.c.queue(() => this.q(s));
					}
					removeKeybinding(s) {
						return this.c.queue(() => this.n(s));
					}
					async m(s, l, y, $) {
						const v = await this.I(),
							S = v.object.textEditorModel;
						if ($) this.s(s, l, y, S, -1);
						else {
							const I = w.$do(S.getValue()),
								T = this.y(s, I);
							this.s(s, l, y, S, T),
								s.isDefault && s.resolvedKeybinding && this.u(s, S);
						}
						try {
							await this.r();
						} finally {
							v.dispose();
						}
					}
					async n(s) {
						const l = await this.I(),
							y = l.object.textEditorModel;
						s.isDefault ? this.u(s, y) : this.t(s, y);
						try {
							return await this.r();
						} finally {
							l.dispose();
						}
					}
					async q(s) {
						const l = await this.I(),
							y = l.object.textEditorModel;
						s.isDefault || (this.t(s, y), this.w(s, y));
						try {
							return await this.r();
						} finally {
							l.dispose();
						}
					}
					r() {
						return this.g.save(this.j.currentProfile.keybindingsResource);
					}
					s(s, l, y, $, v) {
						const { tabSize: S, insertSpaces: I } = $.getOptions(),
							T = $.getEOL();
						if (v !== -1) {
							this.G(
								(0, C.$ro)($.getValue(), [v, "key"], l, {
									tabSize: S,
									insertSpaces: I,
									eol: T,
								})[0],
								$,
							);
							const P = (0, C.$ro)($.getValue(), [v, "when"], y, {
								tabSize: S,
								insertSpaces: I,
								eol: T,
							});
							P.length > 0 && this.G(P[0], $);
						} else
							this.G(
								(0, C.$ro)($.getValue(), [-1], this.C(l, s.command, y, !1), {
									tabSize: S,
									insertSpaces: I,
									eol: T,
								})[0],
								$,
							);
					}
					t(s, l) {
						const { tabSize: y, insertSpaces: $ } = l.getOptions(),
							v = l.getEOL(),
							S = w.$do(l.getValue()),
							I = this.y(s, S);
						I !== -1 &&
							this.G(
								(0, C.$ro)(l.getValue(), [I], void 0, {
									tabSize: y,
									insertSpaces: $,
									eol: v,
								})[0],
								l,
							);
					}
					u(s, l) {
						const { tabSize: y, insertSpaces: $ } = l.getOptions(),
							v = l.getEOL(),
							S = s.resolvedKeybinding
								? s.resolvedKeybinding.getUserSettingsLabel()
								: null;
						if (S) {
							const I = this.C(
								S,
								s.command,
								s.when ? s.when.serialize() : void 0,
								!0,
							);
							w.$do(l.getValue()).every((P) => !this.F(P, I)) &&
								this.G(
									(0, C.$ro)(l.getValue(), [-1], I, {
										tabSize: y,
										insertSpaces: $,
										eol: v,
									})[0],
									l,
								);
						}
					}
					w(s, l) {
						const { tabSize: y, insertSpaces: $ } = l.getOptions(),
							v = l.getEOL(),
							S = w.$do(l.getValue()),
							I = this.z(s, S).reverse();
						for (const T of I)
							this.G(
								(0, C.$ro)(l.getValue(), [T], void 0, {
									tabSize: y,
									insertSpaces: $,
									eol: v,
								})[0],
								l,
							);
					}
					y(s, l) {
						for (let y = 0; y < l.length; y++) {
							const $ = l[y];
							if ($.command === s.command) {
								if (!$.when && !s.when) return y;
								if ($.when && s.when) {
									const v = h.$Kj.deserialize($.when);
									if (v && v.serialize() === s.when.serialize()) return y;
								}
							}
						}
						return -1;
					}
					z(s, l) {
						const y = [];
						for (let $ = 0; $ < l.length; $++)
							l[$].command === `-${s.command}` && y.push($);
						return y;
					}
					C(s, l, y, $) {
						const v = { key: s };
						return l && (v.command = $ ? `-${l}` : l), y && (v.when = y), v;
					}
					F(s, l) {
						if (s.command !== l.command || s.key !== l.key) return !1;
						const y = h.$Kj.deserialize(s.when),
							$ = h.$Kj.deserialize(l.when);
						return !(
							(y && !$) ||
							(!y && $) ||
							(y && $ && !y.equals($)) ||
							!E.$zo(s.args, l.args)
						);
					}
					G(s, l) {
						const y = l.getPositionAt(s.offset),
							$ = l.getPositionAt(s.offset + s.length),
							v = new r.$iL(y.lineNumber, y.column, $.lineNumber, $.column),
							I = l.getValueInRange(v)
								? m.$jL.replace(v, s.content)
								: m.$jL.insert(y, s.content);
						l.pushEditOperations(
							[new u.$kL(y.lineNumber, y.column, y.lineNumber, y.column)],
							[I],
							() => [],
						);
					}
					async H() {
						return (
							(await this.h.exists(
								this.j.currentProfile.keybindingsResource,
							)) ||
								(await this.g.write(
									this.j.currentProfile.keybindingsResource,
									this.L(),
									{ encoding: "utf8" },
								)),
							this.f.createModelReference(
								this.j.currentProfile.keybindingsResource,
							)
						);
					}
					async I() {
						if (this.g.isDirty(this.j.currentProfile.keybindingsResource))
							throw new Error((0, t.localize)(12511, null));
						const s = await this.H(),
							l = s.object.textEditorModel,
							y = l.getEOL();
						if (l.getValue()) {
							const $ = this.J(l);
							if ($.parseErrors.length)
								throw (s.dispose(), new Error((0, t.localize)(12512, null)));
							if ($.result) {
								if (!Array.isArray($.result))
									throw (s.dispose(), new Error((0, t.localize)(12513, null)));
							} else {
								const v = y + "[]";
								this.G(
									{ content: v, length: v.length, offset: l.getValue().length },
									l,
								);
							}
						} else {
							const $ = this.L();
							this.G({ content: $, length: $.length, offset: 0 }, l);
						}
						return s;
					}
					J(s) {
						const l = [];
						return {
							result: w.$do(s.getValue(), l, {
								allowTrailingComma: !0,
								allowEmptyContent: !0,
							}),
							parseErrors: l,
						};
					}
					L() {
						return (
							"// " +
							(0, t.localize)(12514, null) +
							`
[
]`
						);
					}
				};
				(e.$fvc = f),
					(e.$fvc = f =
						Ne([j(0, a.$MO), j(1, g.$kZ), j(2, c.$ll), j(3, o.$P8)], f)),
					(0, p.$lK)(e.$evc, f, p.InstantiationType.Delayed);
			},
		)
