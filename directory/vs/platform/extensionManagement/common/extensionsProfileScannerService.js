import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/buffer.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/event.js';
import '../../../base/common/map.js';
import '../../../base/common/uri.js';
import './extensionManagement.js';
import './extensionManagementUtil.js';
import '../../files/common/files.js';
import '../../instantiation/common/instantiation.js';
import '../../log/common/log.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../uriIdentity/common/uriIdentity.js';
import '../../../base/common/types.js';
import '../../../base/common/errors.js';
import '../../telemetry/common/telemetry.js';
define(
			de[1214],
			he([1, 0, 15, 76, 3, 6, 59, 9, 119, 154, 22, 5, 34, 129, 68, 28, 29, 32]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ar =
						e.$_q =
						e.$$q =
						e.ExtensionsProfileScanningErrorCode =
							void 0);
				var f;
				(function ($) {
					($.ERROR_PROFILE_NOT_FOUND = "ERROR_PROFILE_NOT_FOUND"),
						($.ERROR_INVALID_CONTENT = "ERROR_INVALID_CONTENT");
				})(f || (e.ExtensionsProfileScanningErrorCode = f = {}));
				class b extends Error {
					constructor(v, S) {
						super(v), (this.code = S);
					}
				}
				(e.$$q = b), (e.$_q = (0, a.$Mi)("IExtensionsProfileScannerService"));
				let s = class extends w.$1c {
					constructor(v, S, I, T, P, k) {
						super(),
							(this.j = v),
							(this.m = S),
							(this.n = I),
							(this.q = T),
							(this.r = P),
							(this.s = k),
							(this.b = this.D(new E.$re())),
							(this.onAddExtensions = this.b.event),
							(this.c = this.D(new E.$re())),
							(this.onDidAddExtensions = this.c.event),
							(this.f = this.D(new E.$re())),
							(this.onRemoveExtensions = this.f.event),
							(this.g = this.D(new E.$re())),
							(this.onDidRemoveExtensions = this.g.event),
							(this.h = new C.$Gc());
					}
					scanProfileExtensions(v, S) {
						return this.t(v, void 0, S);
					}
					async addExtensionsToProfile(v, S, I) {
						const T = [],
							P = [];
						try {
							return (
								await this.t(S, (k) => {
									const L = [];
									if (I) L.push(...k);
									else
										for (const D of k)
											v.some(
												([M]) =>
													(0, r.$7p)(M.identifier, D.identifier) &&
													(M.manifest.version !== D.version ||
														M.location.toString() !== D.location.toString()),
											)
												? T.push(D)
												: L.push(D);
									for (const [D, M] of v) {
										const N = L.findIndex(
												(R) =>
													(0, r.$7p)(R.identifier, D.identifier) &&
													R.version === D.manifest.version &&
													R.location.toString() === D.location.toString(),
											),
											A = {
												identifier: D.identifier,
												version: D.manifest.version,
												location: D.location,
												metadata: M,
											};
										N === -1 ? (P.push(A), L.push(A)) : L.splice(N, 1, A);
									}
									return (
										P.length &&
											this.b.fire({ extensions: P, profileLocation: S }),
										T.length &&
											this.f.fire({ extensions: T, profileLocation: S }),
										L
									);
								}),
								P.length && this.c.fire({ extensions: P, profileLocation: S }),
								T.length && this.g.fire({ extensions: T, profileLocation: S }),
								P
							);
						} catch (k) {
							throw (
								(P.length &&
									this.c.fire({ extensions: P, error: k, profileLocation: S }),
								T.length &&
									this.g.fire({ extensions: T, error: k, profileLocation: S }),
								k)
							);
						}
					}
					async updateMetadata(v, S) {
						const I = [];
						return (
							await this.t(S, (T) => {
								const P = [];
								for (const k of T) {
									const L = v.find(
										([D]) =>
											(0, r.$7p)(D.identifier, k.identifier) &&
											D.manifest.version === k.version,
									);
									L && ((k.metadata = { ...k.metadata, ...L[1] }), I.push(k)),
										P.push(k);
								}
								return P;
							}),
							I
						);
					}
					async removeExtensionFromProfile(v, S) {
						const I = [];
						try {
							await this.t(S, (T) => {
								const P = [];
								for (const k of T)
									(0, r.$7p)(k.identifier, v.identifier)
										? I.push(k)
										: P.push(k);
								return (
									I.length &&
										this.f.fire({ extensions: I, profileLocation: S }),
									P
								);
							}),
								I.length && this.g.fire({ extensions: I, profileLocation: S });
						} catch (T) {
							throw (
								(I.length &&
									this.g.fire({ extensions: I, error: T, profileLocation: S }),
								T)
							);
						}
					}
					async t(v, S, I) {
						return this.F(v).queue(async () => {
							let T = [],
								P;
							try {
								const k = await this.m.readFile(v);
								P = JSON.parse(k.value.toString().trim() || "[]");
							} catch (k) {
								if ((0, u.$Cl)(k) !== u.FileOperationResult.FILE_NOT_FOUND)
									throw k;
								if (
									(this.q.extUri.isEqual(
										v,
										this.n.defaultProfile.extensionsResource,
									) && (P = await this.C()),
									!P && I?.bailOutWhenFileNotFound)
								)
									throw new b((0, p.$bb)(k), f.ERROR_PROFILE_NOT_FOUND);
							}
							if (P) {
								Array.isArray(P) || this.u(v);
								let k = !1;
								for (const L of P) {
									l(L) || this.u(v);
									let D;
									if ((0, g.$lg)(L.relativeLocation) && L.relativeLocation)
										D = this.y(L.relativeLocation);
									else if ((0, g.$lg)(L.location)) {
										this.s.warn(
											`Extensions profile: Ignoring extension with invalid location: ${L.location}`,
										);
										continue;
									} else {
										D = d.URI.revive(L.location);
										const M = this.w(D);
										M && ((k = !0), (L.relativeLocation = M));
									}
									(0, g.$sg)(L.metadata?.hasPreReleaseVersion) &&
										L.metadata?.preRelease &&
										((k = !0), (L.metadata.hasPreReleaseVersion = !0)),
										T.push({
											identifier: L.identifier,
											location: D,
											version: L.version,
											metadata: L.metadata,
										});
								}
								k &&
									(await this.m.writeFile(
										v,
										i.$Te.fromString(JSON.stringify(P)),
									));
							}
							if (S) {
								T = S(T);
								const k = T.map((L) => ({
									identifier: L.identifier,
									version: L.version,
									location: L.location.toJSON(),
									relativeLocation: this.w(L.location),
									metadata: L.metadata,
								}));
								await this.m.writeFile(v, i.$Te.fromString(JSON.stringify(k)));
							}
							return T;
						});
					}
					u(v) {
						const S = new b(
							`Invalid extensions content in ${v.toString()}`,
							f.ERROR_INVALID_CONTENT,
						);
						throw (
							(this.r.publicLogError2("extensionsProfileScanningError", {
								code: S.code,
							}),
							S)
						);
					}
					w(v) {
						return this.q.extUri.isEqual(this.q.extUri.dirname(v), this.j)
							? this.q.extUri.basename(v)
							: void 0;
					}
					y(v) {
						return this.q.extUri.joinPath(this.j, v);
					}
					async C() {
						return (
							this.z ||
								(this.z = (async () => {
									const v = this.q.extUri.joinPath(
											this.n.defaultProfile.location,
											"extensions.json",
										),
										S = this.q.extUri.joinPath(
											this.j,
											".init-default-profile-extensions",
										);
									let I;
									try {
										I = (await this.m.readFile(v)).value.toString();
									} catch (P) {
										if ((0, u.$Cl)(P) === u.FileOperationResult.FILE_NOT_FOUND)
											return;
										throw P;
									}
									this.s.info(
										"Migrating extensions from old default profile location",
										v.toString(),
									);
									let T;
									try {
										const P = JSON.parse(I);
										Array.isArray(P) && P.every((k) => l(k))
											? (T = P)
											: this.s.warn(
													"Skipping migrating from old default profile locaiton: Found invalid data",
													P,
												);
									} catch (P) {
										this.s.error(P);
									}
									if (T)
										try {
											await this.m.createFile(
												this.n.defaultProfile.extensionsResource,
												i.$Te.fromString(JSON.stringify(T)),
												{ overwrite: !1 },
											),
												this.s.info(
													"Migrated extensions from old default profile location to new location",
													v.toString(),
													this.n.defaultProfile.extensionsResource.toString(),
												);
										} catch (P) {
											if (
												(0, u.$Cl)(P) ===
												u.FileOperationResult.FILE_MODIFIED_SINCE
											)
												this.s.info(
													"Migration from old default profile location to new location is done by another window",
													v.toString(),
													this.n.defaultProfile.extensionsResource.toString(),
												);
											else throw P;
										}
									try {
										await this.m.del(v);
									} catch (P) {
										(0, u.$Cl)(P) !== u.FileOperationResult.FILE_NOT_FOUND &&
											this.s.error(P);
									}
									try {
										await this.m.del(S);
									} catch (P) {
										(0, u.$Cl)(P) !== u.FileOperationResult.FILE_NOT_FOUND &&
											this.s.error(P);
									}
									return T;
								})()),
							this.z
						);
					}
					F(v) {
						let S = this.h.get(v);
						return S || ((S = new t.$Th()), this.h.set(v, S)), S;
					}
				};
				(e.$ar = s),
					(e.$ar = s =
						Ne(
							[j(1, u.$ll), j(2, c.$Xl), j(3, n.$Vl), j(4, o.$km), j(5, h.$ik)],
							s,
						));
				function l($) {
					return (
						(0, g.$ng)($) &&
						(0, m.$Dp)($.identifier) &&
						(y($.location) || ((0, g.$lg)($.location) && $.location)) &&
						((0, g.$sg)($.relativeLocation) ||
							(0, g.$lg)($.relativeLocation)) &&
						$.version &&
						(0, g.$lg)($.version)
					);
				}
				function y($) {
					return $ ? (0, g.$lg)($.path) && (0, g.$lg)($.scheme) : !1;
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	