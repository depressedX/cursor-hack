import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../notebookCommon.js';
define(de[1842], he([1, 0, 6, 3, 70]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*notebookCommon*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$85 = void 0);
			class E extends i.$1c {
				get outputs() {
					return this.f.outputs || [];
				}
				get metadata() {
					return this.f.metadata;
				}
				get outputId() {
					return this.f.outputId;
				}
				get alternativeOutputId() {
					return this.b;
				}
				get versionId() {
					return this.c;
				}
				constructor(d) {
					super(),
						(this.f = d),
						(this.a = this.D(new t.$re())),
						(this.onDidChangeData = this.a.event),
						(this.c = 0),
						(this.h = {}),
						(this.b = this.f.outputId);
				}
				replaceData(d) {
					(this.h = {}),
						(this.f = d),
						this.j(),
						(this.c = this.c + 1),
						this.a.fire();
				}
				appendData(d) {
					this.g(),
						this.f.outputs.push(...d),
						this.j(),
						(this.c = this.c + 1),
						this.a.fire();
				}
				g() {
					this.outputs.forEach((d) => {
						(0, w.$76)(d.mime) &&
							(this.h[d.mime] || (this.h[d.mime] = {}),
							(this.h[d.mime][this.versionId] = d.data.byteLength));
					});
				}
				appendedSinceVersion(d, m) {
					const r = this.h[m]?.[d],
						u = this.outputs.find((a) => a.mime === m);
					if (r && u) return u.data.slice(r);
				}
				j() {
					if (
						this.outputs.length > 1 &&
						this.outputs.every((d) => (0, w.$76)(d.mime))
					) {
						const d = new Map(),
							m = [];
						this.outputs.forEach((r) => {
							let u;
							d.has(r.mime)
								? (u = d.get(r.mime))
								: ((u = []), d.set(r.mime, u), m.push(r.mime)),
								u.push(r.data.buffer);
						}),
							(this.outputs.length = 0),
							m.forEach((r) => {
								const u = (0, w.$86)(d.get(r));
								this.outputs.push({ mime: r, data: u.data }),
									u.didCompression && (this.h = {});
							});
					}
				}
				asDto() {
					return {
						metadata: this.f.metadata,
						outputs: this.f.outputs,
						outputId: this.f.outputId,
					};
				}
				bumpVersion() {
					this.c = this.c + 1;
				}
			}
			e.$85 = E;
		}),
		