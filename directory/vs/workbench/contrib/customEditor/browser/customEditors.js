import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../common/editor.js';
import '../../../common/editor/diffEditorInput.js';
import '../common/customEditor.js';
import '../common/customEditorModelManager.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../services/editor/common/editorService.js';
import '../common/contributedCustomEditors.js';
import './customEditorInput.js';
import '../../../../css!vs/workbench/contrib/customEditor/browser/media/customEditor.js';
define(
			de[3878],
			he([
				1, 0, 24, 6, 3, 23, 19, 28, 9, 46, 22, 5, 30, 21, 68, 44, 296, 625,
				3047, 66, 231, 18, 3577, 849, 2424,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*event*/,
				w /*lifecycle*/,
				E /*network*/,
				C /*resources*/,
				d /*types*/,
				m /*uri*/,
				r /*editorExtensions*/,
				u /*files*/,
				a /*instantiation*/,
				h /*platform*/,
				c /*storage*/,
				n /*uriIdentity*/,
				g /*editor*/,
				p /*diffEditorInput*/,
				o /*customEditor*/,
				f /*customEditorModelManager*/,
				b /*editorGroupsService*/,
				s /*editorResolverService*/,
				l /*editorService*/,
				y /*contributedCustomEditors*/,
				$ /*customEditorInput*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CSc = void 0);
				let v = class extends w.$1c {
					constructor(I, T, P, k, L, D, M) {
						super(),
							(this.n = P),
							(this.q = k),
							(this.r = L),
							(this.s = D),
							(this.t = M),
							(this.b = 0),
							(this.c = this.D(new w.$Zc())),
							(this.g = new Map()),
							(this.h = new f.$zSc()),
							(this.j = this.D(new i.$re())),
							(this.onDidChangeEditorTypes = this.j.event),
							(this.m = h.$Io.as(g.$a1.EditorFactory).getFileEditorFactory()),
							(this.a = this.D(new y.$BSc(T))),
							this.t.bufferChangeEvents(this.w.bind(this)),
							this.D(
								this.a.onChange(() => {
									this.t.bufferChangeEvents(this.w.bind(this)), this.j.fire();
								}),
							);
						const N = {
								contextKey: o.$knc,
								getGroupContextKeyValue: (O) => this.z(O),
								onDidChange: this.onDidChangeEditorTypes,
							},
							A = {
								contextKey: o.$lnc,
								getGroupContextKeyValue: (O) => this.C(O),
								onDidChange: this.onDidChangeEditorTypes,
							};
						this.D(this.q.registerContextKeyProvider(N)),
							this.D(this.q.registerContextKeyProvider(A)),
							this.D(
								I.onDidRunOperation((O) => {
									O.isOperation(u.FileOperation.MOVE) &&
										this.F(
											O.resource,
											this.s.asCanonicalUri(O.target.resource),
										);
								}),
							);
						const R = 105;
						this.D(
							r.$stb.addImplementation(R, "custom-editor", () =>
								this.u((O) => O.undo()),
							),
						),
							this.D(
								r.$ttb.addImplementation(R, "custom-editor", () =>
									this.u((O) => O.redo()),
								),
							);
					}
					getEditorTypes() {
						return [...this.a];
					}
					u(I) {
						const T = this.n.activeEditor;
						if (T instanceof $.$tnc) {
							const P = I(T);
							return P || !0;
						}
						return !1;
					}
					w() {
						this.c.clear();
						for (const I of this.a)
							for (const T of I.selector)
								T.filenamePattern &&
									this.c.add(
										this.t.registerEditor(
											T.filenamePattern,
											{
												id: I.id,
												label: I.displayName,
												detail: I.providerDisplayName,
												priority: I.priority,
											},
											{
												singlePerResource: () =>
													!(
														this.getCustomEditorCapabilities(I.id)
															?.supportsMultipleEditorsPerDocument ?? !1
													),
											},
											{
												createEditorInput: ({ resource: P }, k) => ({
													editor: $.$tnc.create(this.r, P, I.id, k.id),
												}),
												createUntitledEditorInput: ({ resource: P }, k) => ({
													editor: $.$tnc.create(
														this.r,
														P ??
															m.URI.from({
																scheme: E.Schemas.untitled,
																authority: `Untitled-${this.b++}`,
															}),
														I.id,
														k.id,
													),
												}),
												createDiffEditorInput: (P, k) => ({
													editor: this.y(P, I.id, k),
												}),
											},
										),
									);
					}
					y(I, T, P) {
						const k = $.$tnc.create(
								this.r,
								(0, d.$wg)(I.modified.resource),
								T,
								P.id,
								{ customClasses: "modified" },
							),
							L = $.$tnc.create(
								this.r,
								(0, d.$wg)(I.original.resource),
								T,
								P.id,
								{ customClasses: "original" },
							);
						return this.r.createInstance(
							p.$GVb,
							I.label,
							I.description,
							L,
							k,
							!0,
						);
					}
					get models() {
						return this.h;
					}
					getCustomEditor(I) {
						return this.a.get(I);
					}
					getContributedCustomEditors(I) {
						return new o.$nnc(this.a.getContributedEditors(I));
					}
					getUserConfiguredCustomEditors(I) {
						const T = this.t.getAssociationsForResource(I);
						return new o.$nnc((0, t.$Lb)(T.map((P) => this.a.get(P.viewType))));
					}
					getAllCustomEditors(I) {
						return new o.$nnc([
							...this.getUserConfiguredCustomEditors(I).allEditors,
							...this.getContributedCustomEditors(I).allEditors,
						]);
					}
					registerCustomEditorCapabilities(I, T) {
						if (this.g.has(I))
							throw new Error(`Capabilities for ${I} already set`);
						return (
							this.g.set(I, T),
							(0, w.$Yc)(() => {
								this.g.delete(I);
							})
						);
					}
					getCustomEditorCapabilities(I) {
						return this.g.get(I);
					}
					z(I) {
						const T = I.activeEditorPane;
						return T?.input?.resource && T?.input instanceof $.$tnc
							? T.input.viewType
							: "";
					}
					C(I) {
						const T = I.activeEditorPane;
						return T?.input?.resource ? T?.input instanceof $.$tnc : !1;
					}
					async F(I, T) {
						if ((0, C.$lh)(I).toLowerCase() === (0, C.$lh)(T).toLowerCase())
							return;
						const P = this.getAllCustomEditors(T);
						if (
							!P.allEditors.some(
								(L) => L.priority !== s.RegisteredEditorPriority.option,
							)
						)
							return;
						const k = new Map();
						for (const L of this.q.groups)
							for (const D of L.editors)
								if (
									this.m.isFileEditor(D) &&
									!(D instanceof $.$tnc) &&
									(0, C.$gh)(D.resource, T)
								) {
									let M = k.get(L.id);
									M || ((M = []), k.set(L.id, M)), M.push(D);
								}
						if (k.size)
							for (const [L, D] of k)
								this.n.replaceEditors(
									D.map((M) => {
										let N;
										if (P.defaultEditor) {
											const A = P.defaultEditor.id;
											N = $.$tnc.create(this.r, T, A, L);
										} else N = { resource: T, options: { override: g.$b1.id } };
										return {
											editor: M,
											replacement: N,
											options: { preserveFocus: !0 },
										};
									}),
									L,
								);
					}
				};
				(e.$CSc = v),
					(e.$CSc = v =
						Ne(
							[
								j(0, u.$ll),
								j(1, c.$lq),
								j(2, l.$IY),
								j(3, b.$EY),
								j(4, a.$Li),
								j(5, n.$Vl),
								j(6, s.$E6),
							],
							v,
						));
			},
		)
