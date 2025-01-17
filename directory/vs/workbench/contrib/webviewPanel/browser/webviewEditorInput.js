import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../common/editor.js';
import '../../../common/editor/editorInput.js';
define(
			de[566],
			he([1, 0, 23, 9, 47, 44, 223]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W4b = void 0);
				class d extends C.$LO {
					static {
						this.typeId = "workbench.editors.webviewInput";
					}
					get typeId() {
						return d.typeId;
					}
					get editorId() {
						return this.viewType;
					}
					get capabilities() {
						return (
							E.EditorInputCapabilities.Readonly |
							E.EditorInputCapabilities.Singleton |
							E.EditorInputCapabilities.CanDropIntoEditor
						);
					}
					get resource() {
						return i.URI.from({
							scheme: t.Schemas.webviewPanel,
							path: `webview-panel/webview-${this.a}`,
						});
					}
					constructor(r, u, a) {
						super(),
							(this.r = a),
							(this.a = (0, w.$9g)()),
							(this.q = !1),
							(this.viewType = r.viewType),
							(this.providedId = r.providedId),
							(this.c = r.name),
							(this.n = u);
					}
					dispose() {
						this.isDisposed() || this.q || this.n?.dispose(), super.dispose();
					}
					getName() {
						return this.c;
					}
					getTitle(r) {
						return this.getName();
					}
					getDescription() {}
					setName(r) {
						(this.c = r), this.webview.setTitle(r), this.f.fire();
					}
					get webview() {
						return this.n;
					}
					get extension() {
						return this.webview.extension;
					}
					get iconPath() {
						return this.h;
					}
					set iconPath(r) {
						(this.h = r), this.r.setIcons(this.a, r);
					}
					matches(r) {
						return super.matches(r) || r === this;
					}
					get group() {
						return this.m;
					}
					updateGroup(r) {
						this.m = r;
					}
					s(r) {
						if (!this.q) return (this.q = !0), (r.n = this.n), r;
					}
					claim(r, u, a) {
						return this.n.claim(r, u, a);
					}
				}
				e.$W4b = d;
			},
		),
		