import '../../../require.js';
import '../../../exports.js';
import './dom.js';
import '../common/lifecycle.js';
import '../common/mime.js';
define(de[323], he([1, 0, 7, 3, 266]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*mime*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ohb = e.$Nhb = void 0),
				(e.$Phb = C);
			class E extends i.$1c {
				constructor(m, r) {
					super(),
						this.D(
							(0, t.$0fb)(m, "dragover", (u) => {
								u.preventDefault(),
									this.a ||
										(this.a = setTimeout(() => {
											r(), (this.a = null);
										}, 800));
							}),
						),
						["dragleave", "drop", "dragend"].forEach((u) => {
							this.D(
								(0, t.$0fb)(m, u, () => {
									this.b();
								}),
							);
						});
				}
				b() {
					this.a && (clearTimeout(this.a), (this.a = null));
				}
				dispose() {
					super.dispose(), this.b();
				}
			}
			(e.$Nhb = E),
				(e.$Ohb = {
					RESOURCES: "ResourceURLs",
					DOWNLOAD_URL: "DownloadURL",
					FILES: "Files",
					TEXT: w.$EK.text,
					INTERNAL_URI_LIST: "application/vnd.code.uri-list",
				});
			function C(d, m, r, u, a) {
				const h = document.createElement("div");
				(h.className = r),
					(h.textContent = m),
					a && (h.style.color = a),
					u && (h.style.background = u),
					d.dataTransfer &&
						((0, t.getWindow)(d).document.body.appendChild(h),
						d.dataTransfer.setDragImage(h, -10, -10),
						setTimeout(() => h.remove(), 0));
			}
		})
