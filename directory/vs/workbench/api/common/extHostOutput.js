import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostRpcService.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../platform/log/common/log.js';
import '../../services/output/common/output.js';
import './extHostFileSystemConsumer.js';
import './extHostInitDataService.js';
import './extHostFileSystemInfo.js';
import '../../../base/common/date.js';
import '../../../base/common/buffer.js';
import '../../../base/common/types.js';
import '../../../platform/files/common/files.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
define(
			Pe[306],
			Ne([1, 0, 6, 5, 21, 25, 14, 596, 115, 34, 92, 467, 22, 19, 32, 4, 3]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Uid = t.$Tid = void 0);
				class $ extends P.$ok {
					get disposed() {
						return this.n;
					}
					constructor(s, f, o, w, m) {
						super(),
							(this.id = s),
							(this.name = f),
							(this.q = o),
							(this.r = w),
							(this.extension = m),
							(this.m = 0),
							(this.n = !1),
							(this.visible = !1),
							this.setLevel(o.getLevel()),
							this.D(o.onDidChangeLogLevel((E) => this.setLevel(E)));
					}
					get logLevel() {
						return this.getLevel();
					}
					appendLine(s) {
						this.append(
							s +
								`
`,
						);
					}
					append(s) {
						this.info(s);
					}
					clear() {
						const s = this.m;
						this.q.flush(),
							this.r.$update(this.id, I.OutputChannelUpdateMode.Clear, s);
					}
					replace(s) {
						const f = this.m;
						this.info(s),
							this.r.$update(this.id, I.OutputChannelUpdateMode.Replace, f),
							this.visible && this.q.flush();
					}
					show(s, f) {
						this.q.flush(),
							this.r.$reveal(this.id, !!(typeof s == "boolean" ? s : f));
					}
					hide() {
						this.r.$close(this.id);
					}
					g(s, f) {
						(this.m += d.$Te.fromString(f).byteLength),
							(0, P.log)(this.q, s, f),
							this.visible &&
								(this.q.flush(),
								this.r.$update(this.id, I.OutputChannelUpdateMode.Append));
					}
					dispose() {
						super.dispose(),
							this.n || (this.r.$dispose(this.id), (this.n = !0));
					}
				}
				class T extends $ {
					appendLine(s) {
						this.append(s);
					}
				}
				let a = class {
					constructor(s, f, o, w, m, E) {
						(this.i = f),
							(this.j = o),
							(this.k = w),
							(this.l = m),
							(this.m = E),
							(this.d = new Map()),
							(this.f = 1),
							(this.g = new Map()),
							(this.h = null),
							(this.a = s.getProxy(e.$lbb.MainThreadOutputService)),
							(this.b = this.k.extUri.joinPath(
								f.logsLocation,
								`output_logging_${(0, y.$gn)(new Date()).replace(/-|:|\.\d+Z$/g, "")}`,
							));
					}
					$setVisibleChannel(s) {
						this.h = s;
						for (const [f, o] of this.g) o.visible = f === this.h;
					}
					createOutputChannel(s, f, o) {
						if (((s = s.trim()), !s))
							throw new Error("illegal argument `name`. must not be falsy");
						const w = typeof f == "object" && f.log,
							m = (0, k.$lg)(f) ? f : void 0;
						if ((0, k.$lg)(m) && !m.trim())
							throw new Error(
								"illegal argument `languageId`. must not be empty",
							);
						let E;
						const R = this.i.environment.extensionLogLevel?.find(([O]) =>
							N.$Gn.equals(o.identifier, O),
						)?.[1];
						R && (E = (0, P.$zk)(R));
						const C = w ? this.o(s, E, o) : this.n(s, m, o);
						return (
							C.then((O) => {
								this.g.set(O.id, O), (O.visible = O.id === this.h);
							}),
							w ? this.r(s, E ?? this.m.getLevel(), C) : this.q(s, C)
						);
					}
					async n(s, f, o) {
						this.c ||
							(this.c = this.j.value
								.createDirectory(this.b)
								.then(() => this.b));
						const w = await this.c,
							m = this.k.extUri.joinPath(
								w,
								`${this.f++}-${s.replace(/[\\/:\*\?"<>\|]/g, "")}.log`,
							),
							E = this.l.createLogger(m, {
								logLevel: "always",
								donotRotate: !0,
								donotUseFormatters: !0,
								hidden: !0,
							}),
							R = await this.a.$register(s, m, f, o.identifier.value);
						return new $(R, s, E, this.a, o);
					}
					async o(s, f, o) {
						const w = await this.p(o),
							m = s.replace(/[\\/:\*\?"<>\|]/g, ""),
							E = this.k.extUri.joinPath(w, `${m}.log`),
							R = `${o.identifier.value}.${m}`,
							C = this.l.createLogger(E, {
								id: R,
								name: s,
								logLevel: f,
								extensionId: o.identifier.value,
							});
						return new T(R, s, C, this.a, o);
					}
					p(s) {
						let f = this.d.get(s.identifier.value);
						if (!f) {
							const o = this.k.extUri.joinPath(
								this.i.logsLocation,
								s.identifier.value,
							);
							this.d.set(
								s.identifier.value,
								(f = (async () => {
									try {
										await this.j.value.createDirectory(o);
									} catch (w) {
										if (
											(0, g.$Bl)(w) !== g.FileSystemProviderErrorCode.FileExists
										)
											throw w;
									}
									return o;
								})()),
							);
						}
						return f;
					}
					q(s, f) {
						let o = !1;
						const w = () => {
							if (o) throw new Error("Channel has been closed");
						};
						return {
							get name() {
								return s;
							},
							append(m) {
								w(), f.then((E) => E.append(m));
							},
							appendLine(m) {
								w(), f.then((E) => E.appendLine(m));
							},
							clear() {
								w(), f.then((m) => m.clear());
							},
							replace(m) {
								w(), f.then((E) => E.replace(m));
							},
							show(m, E) {
								w(), f.then((R) => R.show(m, E));
							},
							hide() {
								w(), f.then((m) => m.hide());
							},
							dispose() {
								(o = !0), f.then((m) => m.dispose());
							},
						};
					}
					r(s, f, o) {
						const w = new h.$Zc(),
							m = () => {
								if (w.isDisposed) throw new Error("Channel has been closed");
							},
							E = w.add(new c.$re());
						function R(C) {
							(f = C), E.fire(C);
						}
						return (
							o.then((C) => {
								w.add(C),
									C.logLevel !== f && R(C.logLevel),
									w.add(C.onDidChangeLogLevel((O) => R(O)));
							}),
							{
								...this.q(s, o),
								get logLevel() {
									return f;
								},
								onDidChangeLogLevel: E.event,
								trace(C, ...O) {
									m(), o.then((A) => A.trace(C, ...O));
								},
								debug(C, ...O) {
									m(), o.then((A) => A.debug(C, ...O));
								},
								info(C, ...O) {
									m(), o.then((A) => A.info(C, ...O));
								},
								warn(C, ...O) {
									m(), o.then((A) => A.warn(C, ...O));
								},
								error(C, ...O) {
									m(), o.then((A) => A.error(C, ...O));
								},
								dispose() {
									w.dispose();
								},
							}
						);
					}
				};
				(t.$Tid = a),
					(t.$Tid = a =
						wt(
							[
								rt(0, S.$08),
								rt(1, n.$98),
								rt(2, l.$uhd),
								rt(3, p.$88),
								rt(4, P.$jk),
								rt(5, P.$ik),
							],
							a,
						)),
					(t.$Uid = (0, r.$Mi)("IExtHostOutputService"));
			},
		),
		