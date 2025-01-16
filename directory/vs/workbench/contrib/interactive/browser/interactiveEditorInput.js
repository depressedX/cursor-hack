define(
			de[1302],
			he([
				1, 0, 6, 54, 19, 172, 42, 10, 57, 5, 44, 223, 1245, 987, 70, 360, 161,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ync = void 0),
					(i = mt(i));
				let f = class extends a.$LO {
					static {
						o = this;
					}
					static create(s, l, y, $, v) {
						return s.createInstance(o, l, y, $, v);
					}
					static {
						this.a = {};
					}
					static setName(s, l) {
						l && (this.a[s.path] = l);
					}
					static {
						this.ID = "workbench.input.interactive";
					}
					get editorId() {
						return "interactive";
					}
					get typeId() {
						return o.ID;
					}
					get language() {
						return this.u?.object.textEditorModel.getLanguageId() ?? this.m;
					}
					get notebookEditorInput() {
						return this.n;
					}
					get editorInputs() {
						return [this.n];
					}
					get resource() {
						return this.q;
					}
					get inputResource() {
						return this.r;
					}
					get primary() {
						return this.n;
					}
					constructor(s, l, y, $, v, S, I, T, P, k, L) {
						const D = g.$TIb.getOrCreate(v, s, void 0, "interactive", {});
						super(),
							(this.C = P),
							(this.F = k),
							(this.h = L.getValue(n.$56.InteractiveWindowPromptToSave) !== !0),
							(this.n = D),
							this.D(this.n),
							(this.c = y ?? o.a[s.path] ?? i.$sc(s.path, i.$tc(s.path))),
							(this.m = $),
							(this.q = s),
							(this.r = l),
							(this.s = null),
							(this.t = null),
							(this.u = null),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							this.G();
					}
					G() {
						const s = t.Event.once(this.primary.onWillDispose);
						this.D(
							s(() => {
								this.isDisposed() || this.dispose();
							}),
						),
							this.D(this.primary.onDidChangeDirty(() => this.b.fire())),
							this.D(this.primary.onDidChangeLabel(() => this.f.fire())),
							this.D(this.primary.onDidChangeCapabilities(() => this.g.fire()));
					}
					get capabilities() {
						const s = this.h ? u.EditorInputCapabilities.Scratchpad : 0;
						return (
							u.EditorInputCapabilities.Untitled |
							u.EditorInputCapabilities.Readonly |
							s
						);
					}
					async H() {
						return this.t || (this.t = await this.n.resolve()), this.t;
					}
					async resolve() {
						return this.t
							? this.t
							: this.s
								? this.s
								: ((this.s = this.H()), this.s);
					}
					async resolveInput(s) {
						if (this.u) return this.u.object.textEditorModel;
						const l = s ?? this.m ?? E.$0M;
						return (
							this.y.willCreateInteractiveDocument(
								this.resource,
								this.inputResource,
								l,
							),
							(this.u = await this.w.createModelReference(this.inputResource)),
							this.u.object.textEditorModel
						);
					}
					async save(s, l) {
						if (this.t)
							return this.hasCapability(u.EditorInputCapabilities.Untitled)
								? this.saveAs(s, l)
								: (await this.t.save(l), this);
					}
					async saveAs(s, l) {
						if (!this.t || !this.C.getContributedNotebookType("interactive"))
							return;
						const $ = this.getName() + ".ipynb",
							v = (0, w.$nh)(await this.F.defaultFilePath(), $),
							S = await this.F.pickFileToSave(v, l?.availableFileSystems);
						if (!S) return;
						const I = await this.t.saveAs(S);
						return (
							I &&
								"resource" in I &&
								I.resource &&
								this.C.getNotebookTextModel(I.resource)?.dispose(),
							I
						);
					}
					matches(s) {
						return super.matches(s)
							? !0
							: s instanceof o
								? (0, w.$gh)(this.resource, s.resource) &&
									(0, w.$gh)(this.inputResource, s.inputResource)
								: !1;
					}
					getName() {
						return this.c;
					}
					isDirty() {
						return this.h ? !1 : (this.t?.isDirty() ?? !1);
					}
					isModified() {
						return this.t?.isModified() ?? !1;
					}
					async revert(s, l) {
						this.t && this.t.isDirty() && (await this.t.revert(l));
					}
					dispose() {
						this.t?.revert({ soft: !0 }),
							this.n?.dispose(),
							this.t?.dispose(),
							(this.t = null),
							this.y.willRemoveInteractiveDocument(
								this.resource,
								this.inputResource,
							),
							this.u?.dispose(),
							(this.u = null),
							super.dispose();
					}
					get historyService() {
						return this.z;
					}
				};
				(e.$ync = f),
					(e.$ync =
						f =
						o =
							Ne(
								[
									j(4, r.$Li),
									j(5, C.$MO),
									j(6, h.$unc),
									j(7, c.$wnc),
									j(8, p.$MIb),
									j(9, m.$IO),
									j(10, d.$gj),
								],
								f,
							));
			},
		),
		