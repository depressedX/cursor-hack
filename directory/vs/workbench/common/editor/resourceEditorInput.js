import '../../../../require.js';
import '../../../../exports.js';
import '../editor.js';
import './editorInput.js';
import '../../../platform/files/common/files.js';
import '../../../platform/label/common/label.js';
import '../../../base/common/resources.js';
import '../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../editor/common/services/textResourceConfiguration.js';
import '../../services/editor/common/customEditorLabelService.js';
define(
			de[1296],
			he([1, 0, 44, 223, 22, 73, 19, 170, 10, 125, 399]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editor*/,
 i /*editorInput*/,
 w /*files*/,
 E /*label*/,
 C /*resources*/,
 d /*filesConfigurationService*/,
 m /*configuration*/,
 r /*textResourceConfiguration*/,
 u /*customEditorLabelService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RIb = void 0);
				let a = class extends i.$LO {
					get capabilities() {
						let c = t.EditorInputCapabilities.CanSplitInGroup;
						return (
							this.m.hasProvider(this.resource)
								? this.n.isReadonly(this.resource) &&
									(c |= t.EditorInputCapabilities.Readonly)
								: (c |= t.EditorInputCapabilities.Untitled),
							c & t.EditorInputCapabilities.Readonly ||
								(c |= t.EditorInputCapabilities.CanDropIntoEditor),
							c
						);
					}
					get preferredResource() {
						return this.a;
					}
					constructor(c, n, g, p, o, f, b) {
						super(),
							(this.resource = c),
							(this.h = g),
							(this.m = p),
							(this.n = o),
							(this.q = f),
							(this.r = b),
							(this.w = void 0),
							(this.y = void 0),
							(this.C = void 0),
							(this.G = void 0),
							(this.I = void 0),
							(this.L = void 0),
							(this.N = void 0),
							(this.a = n || c),
							this.s();
					}
					s() {
						this.D(this.h.onDidChangeFormatters((c) => this.t(c.scheme))),
							this.D(
								this.m.onDidChangeFileSystemProviderRegistrations((c) =>
									this.t(c.scheme),
								),
							),
							this.D(
								this.m.onDidChangeFileSystemProviderCapabilities((c) =>
									this.t(c.scheme),
								),
							),
							this.D(this.r.onDidChange(() => this.u()));
					}
					t(c) {
						c === this.a.scheme && this.u();
					}
					u() {
						(this.w = void 0),
							(this.y = void 0),
							(this.C = void 0),
							(this.G = void 0),
							(this.I = void 0),
							(this.L = void 0),
							(this.N = void 0),
							this.f.fire();
					}
					setPreferredResource(c) {
						(0, C.$gh)(c, this.a) || ((this.a = c), this.u());
					}
					getName() {
						return (
							typeof this.w != "string" &&
								(this.w =
									this.r.getName(this.a) ?? this.h.getUriBasenameLabel(this.a)),
							this.w
						);
					}
					getDescription(c = t.Verbosity.MEDIUM) {
						switch (c) {
							case t.Verbosity.SHORT:
								return this.z;
							case t.Verbosity.LONG:
								return this.H;
							case t.Verbosity.MEDIUM:
							default:
								return this.F;
						}
					}
					get z() {
						return (
							typeof this.y != "string" &&
								(this.y = this.h.getUriBasenameLabel((0, C.$mh)(this.a))),
							this.y
						);
					}
					get F() {
						return (
							typeof this.C != "string" &&
								(this.C = this.h.getUriLabel((0, C.$mh)(this.a), {
									relative: !0,
								})),
							this.C
						);
					}
					get H() {
						return (
							typeof this.G != "string" &&
								(this.G = this.h.getUriLabel((0, C.$mh)(this.a))),
							this.G
						);
					}
					get J() {
						return (
							typeof this.I != "string" && (this.I = this.getName()), this.I
						);
					}
					get M() {
						return (
							typeof this.L != "string" &&
								(this.L = this.h.getUriLabel(this.a, { relative: !0 })),
							this.L
						);
					}
					get O() {
						return (
							typeof this.N != "string" &&
								(this.N = this.h.getUriLabel(this.a)),
							this.N
						);
					}
					getTitle(c) {
						switch (c) {
							case t.Verbosity.SHORT:
								return this.J;
							case t.Verbosity.LONG:
								return this.O;
							default:
							case t.Verbosity.MEDIUM:
								return this.M;
						}
					}
					isReadonly() {
						return this.n.isReadonly(this.resource);
					}
					P(c) {
						if (c?.limits) return c.limits;
						const n = (0, w.$Ul)(this.resource);
						let g;
						const p = this.q.inspect(
							this.resource,
							null,
							"workbench.editorLargeFileConfirmation",
						);
						return (0, m.$kj)(p) && (g = p.value * w.$Tl.MB), { size: g ?? n };
					}
				};
				(e.$RIb = a),
					(e.$RIb = a =
						Ne(
							[
								j(2, E.$3N),
								j(3, w.$ll),
								j(4, d.$_Y),
								j(5, r.$XO),
								j(6, u.$QIb),
							],
							a,
						));
			},
		)
