import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/hierarchicalKind.js';
define(de[291], he([1, 0, 29, 318]), function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*hierarchicalKind*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$KAb =
					e.$JAb =
					e.CodeActionTriggerSource =
					e.CodeActionAutoApply =
					e.$GAb =
						void 0),
				(e.$HAb = C),
				(e.$IAb = d),
				(e.$GAb = new (class {
					constructor() {
						(this.QuickFix = new i.$1L("quickfix")),
							(this.Refactor = new i.$1L("refactor")),
							(this.RefactorExtract = this.Refactor.append("extract")),
							(this.RefactorInline = this.Refactor.append("inline")),
							(this.RefactorMove = this.Refactor.append("move")),
							(this.RefactorRewrite = this.Refactor.append("rewrite")),
							(this.Notebook = new i.$1L("notebook")),
							(this.Source = new i.$1L("source")),
							(this.SourceOrganizeImports =
								this.Source.append("organizeImports")),
							(this.SourceFixAll = this.Source.append("fixAll")),
							(this.SurroundWith = this.Refactor.append("surround"));
					}
				})());
			var w;
			(function (a) {
				(a.IfSingle = "ifSingle"), (a.First = "first"), (a.Never = "never");
			})(w || (e.CodeActionAutoApply = w = {}));
			var E;
			(function (a) {
				(a.Refactor = "refactor"),
					(a.RefactorPreview = "refactor preview"),
					(a.Lightbulb = "lightbulb"),
					(a.Default = "other (default)"),
					(a.SourceAction = "source action"),
					(a.QuickFix = "quick fix action"),
					(a.FixAll = "fix all"),
					(a.OrganizeImports = "organize imports"),
					(a.AutoFix = "auto fix"),
					(a.QuickFixHover = "quick fix hover window"),
					(a.OnSave = "save participants"),
					(a.ProblemsView = "problems view");
			})(E || (e.CodeActionTriggerSource = E = {}));
			function C(a, h) {
				return !(
					(a.include && !a.include.intersects(h)) ||
					(a.excludes && a.excludes.some((c) => m(h, c, a.include))) ||
					(!a.includeSourceActions && e.$GAb.Source.contains(h))
				);
			}
			function d(a, h) {
				const c = h.kind ? new i.$1L(h.kind) : void 0;
				return !(
					(a.include && (!c || !a.include.contains(c))) ||
					(a.excludes && c && a.excludes.some((n) => m(c, n, a.include))) ||
					(!a.includeSourceActions && c && e.$GAb.Source.contains(c)) ||
					(a.onlyIncludePreferredActions && !h.isPreferred)
				);
			}
			function m(a, h, c) {
				return !(!h.contains(a) || (c && h.contains(c)));
			}
			class r {
				static fromUser(h, c) {
					return !h || typeof h != "object"
						? new r(c.kind, c.apply, !1)
						: new r(r.b(h, c.kind), r.a(h, c.apply), r.c(h));
				}
				static a(h, c) {
					switch (typeof h.apply == "string" ? h.apply.toLowerCase() : "") {
						case "first":
							return w.First;
						case "never":
							return w.Never;
						case "ifsingle":
							return w.IfSingle;
						default:
							return c;
					}
				}
				static b(h, c) {
					return typeof h.kind == "string" ? new i.$1L(h.kind) : c;
				}
				static c(h) {
					return typeof h.preferred == "boolean" ? h.preferred : !1;
				}
				constructor(h, c, n) {
					(this.kind = h), (this.apply = c), (this.preferred = n);
				}
			}
			e.$JAb = r;
			class u {
				constructor(h, c, n) {
					(this.action = h), (this.provider = c), (this.highlightRange = n);
				}
				async resolve(h) {
					if (this.provider?.resolveCodeAction && !this.action.edit) {
						let c;
						try {
							c = await this.provider.resolveCodeAction(this.action, h);
						} catch (n) {
							(0, t.$5)(n);
						}
						c && (this.action.edit = c.edit);
					}
					return this;
				}
			}
			e.$KAb = u;
		})
