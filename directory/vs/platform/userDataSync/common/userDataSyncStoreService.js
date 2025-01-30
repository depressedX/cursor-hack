import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/mime.js';
import '../../../base/common/platform.js';
import '../../../base/common/resources.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../base/common/uuid.js';
import '../../configuration/common/configuration.js';
import '../../environment/common/environment.js';
import '../../files/common/files.js';
import '../../product/common/productService.js';
import '../../request/common/request.js';
import '../../externalServices/common/serviceMachineId.js';
import '../../storage/common/storage.js';
import './userDataSync.js';
define(
			de[966],
			he([
				1, 0, 15, 33, 29, 6, 3, 266, 12, 19, 28, 9, 47, 10, 113, 22, 62, 327,
				678, 21, 150,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*cancellation*/,
				w /*errors*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*mime*/,
				m /*platform*/,
				r /*resources*/,
				u /*types*/,
				a /*uri*/,
				h /*uuid*/,
				c /*configuration*/,
				n /*environment*/,
				g /*files*/,
				p /*productService*/,
				o /*request*/,
				f /*serviceMachineId*/,
				b /*storage*/,
				s /*userDataSync*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7xc = e.$6xc = e.$5xc = e.$4xc = e.$3xc = void 0);
				const l = "configurationSync.store",
					y = "sync.previous.store",
					$ = "sync.donot-make-requests-until",
					v = "sync.user-session-id",
					S = "sync.machine-session-id",
					I = 100,
					T = 1e3 * 60 * 5;
				let P = class extends C.$1c {
					get userDataSyncStore() {
						return this.b;
					}
					get c() {
						return this.h.get(s.$2Rb, b.StorageScope.APPLICATION);
					}
					set c(A) {
						this.h.store(
							s.$2Rb,
							A,
							b.StorageScope.APPLICATION,
							m.$r ? b.StorageTarget.USER : b.StorageTarget.MACHINE,
						);
					}
					constructor(A, R, O) {
						super(),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeUserDataSyncStore = this.a.event),
							this.j();
						const B = this.D(new C.$Zc());
						this.D(
							E.Event.filter(
								O.onDidChangeValue(b.StorageScope.APPLICATION, s.$2Rb, B),
								() => this.c !== this.userDataSyncStore?.type,
								B,
							)(() => this.j()),
						);
					}
					j() {
						(this.b = this.m(this.f[l])), this.a.fire();
					}
					m(A) {
						if (
							A &&
							((A = m.$r && A.web ? { ...A, ...A.web } : A),
							(0, u.$lg)(A.url) &&
								(0, u.$ng)(A.authenticationProviders) &&
								Object.keys(A.authenticationProviders).every((R) =>
									Array.isArray(A.authenticationProviders[R].scopes),
								))
						) {
							const R = A,
								O = !!R.canSwitch,
								B = R.url === R.insidersUrl ? "insiders" : "stable",
								U = (O ? this.c : void 0) || B,
								z =
									U === "insiders"
										? R.insidersUrl
										: U === "stable"
											? R.stableUrl
											: R.url;
							return {
								url: a.URI.parse(z),
								type: U,
								defaultType: B,
								defaultUrl: a.URI.parse(R.url),
								stableUrl: a.URI.parse(R.stableUrl),
								insidersUrl: a.URI.parse(R.insidersUrl),
								canSwitch: O,
								authenticationProviders: Object.keys(
									R.authenticationProviders,
								).reduce(
									(F, x) => (
										F.push({
											id: x,
											scopes: R.authenticationProviders[x].scopes,
										}),
										F
									),
									[],
								),
							};
						}
					}
				};
				(e.$3xc = P),
					(e.$3xc = P = Ne([j(0, p.$Bk), j(1, c.$gj), j(2, b.$lq)], P));
				let k = class extends P {
					constructor(A, R, O) {
						super(A, R, O);
						const B = this.h.get(y, b.StorageScope.APPLICATION);
						B && (this.n = JSON.parse(B));
						const U = this.f[l];
						U
							? this.h.store(
									y,
									JSON.stringify(U),
									b.StorageScope.APPLICATION,
									b.StorageTarget.MACHINE,
								)
							: this.h.remove(y, b.StorageScope.APPLICATION);
					}
					async switch(A) {
						A !== this.c && ((this.c = A), this.j());
					}
					async getPreviousUserDataSyncStore() {
						return this.m(this.n);
					}
				};
				(e.$4xc = k),
					(e.$4xc = k = Ne([j(0, p.$Bk), j(1, c.$gj), j(2, b.$lq)], k));
				let L = class extends C.$1c {
					get donotMakeRequestsUntil() {
						return this.j;
					}
					constructor(A, R, O, B, U, z, F) {
						super(),
							(this.n = O),
							(this.q = B),
							(this.r = F),
							(this.g = this.D(new E.$re())),
							(this.onTokenFailed = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onTokenSucceed = this.h.event),
							(this.j = void 0),
							(this.m = this.D(new E.$re())),
							(this.onDidChangeDonotMakeRequestsUntil = this.m.event),
							(this.u = void 0),
							this.s(A),
							(this.c = (0, f.getServiceMachineId)(U, z, F).then((x) => {
								const H = {
									"X-Client-Name": `${R.applicationName}${m.$r ? "-web" : ""}`,
									"X-Client-Version": R.version,
								};
								return R.commit && (H["X-Client-Commit"] = R.commit), H;
							})),
							(this.f = new M(I, T, this.n, this.q)),
							this.t(),
							this.D(
								(0, C.$Yc)(() => {
									this.u && (this.u.cancel(), (this.u = void 0));
								}),
							);
					}
					setAuthToken(A, R) {
						this.b = { token: A, type: R };
					}
					s(A) {
						this.a = A ? (0, r.$nh)(A, "v1") : void 0;
					}
					t() {
						const A = this.r.getNumber($, b.StorageScope.APPLICATION);
						A && Date.now() < A && this.w(new Date(A));
					}
					w(A) {
						this.j?.getTime() !== A?.getTime() &&
							((this.j = A),
							this.u && (this.u.cancel(), (this.u = void 0)),
							this.j
								? (this.r.store(
										$,
										this.j.getTime(),
										b.StorageScope.APPLICATION,
										b.StorageTarget.MACHINE,
									),
									(this.u = (0, t.$zh)((R) =>
										(0, t.$Nh)(this.j.getTime() - Date.now(), R).then(() =>
											this.w(void 0),
										),
									)),
									this.u.then(null, (R) => null))
								: this.r.remove($, b.StorageScope.APPLICATION),
							this.m.fire());
					}
					async getAllCollections(A = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const R = (0, r.$nh)(this.a, "collection").toString();
						(A = { ...A }), (A["Content-Type"] = "application/json");
						const O = await this.C(
							R,
							{ type: "GET", headers: A },
							[],
							i.CancellationToken.None,
						);
						return (await (0, o.$Gq)(O))?.map(({ id: B }) => B) || [];
					}
					async createCollection(A = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const R = (0, r.$nh)(this.a, "collection").toString();
						(A = { ...A }), (A["Content-Type"] = d.$EK.text);
						const O = await this.C(
								R,
								{ type: "POST", headers: A },
								[],
								i.CancellationToken.None,
							),
							B = await (0, o.$Fq)(O);
						if (!B)
							throw new s.$ZRb(
								"Server did not return the collection id",
								R,
								s.UserDataSyncErrorCode.NoCollection,
								O.res.statusCode,
								O.res.headers[s.$VRb],
							);
						return B;
					}
					async deleteCollection(A, R = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const O = A
							? (0, r.$nh)(this.a, "collection", A).toString()
							: (0, r.$nh)(this.a, "collection").toString();
						(R = { ...R }),
							await this.C(
								O,
								{ type: "DELETE", headers: R },
								[],
								i.CancellationToken.None,
							);
					}
					async getAllResourceRefs(A, R) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const O = this.y(this.a, R, A),
							B = {},
							U = await this.C(
								O.toString(),
								{ type: "GET", headers: B },
								[],
								i.CancellationToken.None,
							);
						return ((await (0, o.$Gq)(U)) || []).map(
							({ url: F, created: x }) => ({
								ref: (0, r.$ph)(O, O.with({ path: F })),
								created: x * 1e3,
							}),
						);
					}
					async resolveResourceContent(A, R, O, B = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const U = (0, r.$nh)(this.y(this.a, O, A), R).toString();
						(B = { ...B }), (B["Cache-Control"] = "no-cache");
						const z = await this.C(
							U,
							{ type: "GET", headers: B },
							[],
							i.CancellationToken.None,
						);
						return await (0, o.$Fq)(z);
					}
					async deleteResource(A, R, O) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const B =
								R !== null
									? (0, r.$nh)(this.y(this.a, O, A), R).toString()
									: this.y(this.a, O, A).toString(),
							U = {};
						await this.C(
							B,
							{ type: "DELETE", headers: U },
							[],
							i.CancellationToken.None,
						);
					}
					async deleteResources() {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const A = (0, r.$nh)(this.a, "resource").toString(),
							R = { "Content-Type": d.$EK.text };
						await this.C(
							A,
							{ type: "DELETE", headers: R },
							[],
							i.CancellationToken.None,
						);
					}
					async readResource(A, R, O, B = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const U = (0, r.$nh)(this.y(this.a, O, A), "latest").toString();
						(B = { ...B }),
							(B["Cache-Control"] = "no-cache"),
							R && (B["If-None-Match"] = R.ref);
						const z = await this.C(
							U,
							{ type: "GET", headers: B },
							[304],
							i.CancellationToken.None,
						);
						let F = null;
						if ((z.res.statusCode === 304 && (F = R), F === null)) {
							const x = z.res.headers.etag;
							if (!x)
								throw new s.$ZRb(
									"Server did not return the ref",
									U,
									s.UserDataSyncErrorCode.NoRef,
									z.res.statusCode,
									z.res.headers[s.$VRb],
								);
							const H = await (0, o.$Fq)(z);
							if (!H && z.res.statusCode === 304)
								throw new s.$ZRb(
									"Empty response",
									U,
									s.UserDataSyncErrorCode.EmptyResponse,
									z.res.statusCode,
									z.res.headers[s.$VRb],
								);
							F = { ref: x, content: H };
						}
						return F;
					}
					async writeResource(A, R, O, B, U = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const z = this.y(this.a, B, A).toString();
						(U = { ...U }),
							(U["Content-Type"] = d.$EK.text),
							O && (U["If-Match"] = O);
						const F = await this.C(
								z,
								{ type: "POST", data: R, headers: U },
								[],
								i.CancellationToken.None,
							),
							x = F.res.headers.etag;
						if (!x)
							throw new s.$ZRb(
								"Server did not return the ref",
								z,
								s.UserDataSyncErrorCode.NoRef,
								F.res.statusCode,
								F.res.headers[s.$VRb],
							);
						return x;
					}
					async manifest(A, R = {}) {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const O = (0, r.$nh)(this.a, "manifest").toString();
						(R = { ...R }),
							(R["Content-Type"] = "application/json"),
							A && (R["If-None-Match"] = A.ref);
						const B = await this.C(
							O,
							{ type: "GET", headers: R },
							[304],
							i.CancellationToken.None,
						);
						let U = null;
						if ((B.res.statusCode === 304 && (U = A), !U)) {
							const F = B.res.headers.etag;
							if (!F)
								throw new s.$ZRb(
									"Server did not return the ref",
									O,
									s.UserDataSyncErrorCode.NoRef,
									B.res.statusCode,
									B.res.headers[s.$VRb],
								);
							const x = await (0, o.$Fq)(B);
							if (!x && B.res.statusCode === 304)
								throw new s.$ZRb(
									"Empty response",
									O,
									s.UserDataSyncErrorCode.EmptyResponse,
									B.res.statusCode,
									B.res.headers[s.$VRb],
								);
							x && (U = { ...JSON.parse(x), ref: F });
						}
						const z = this.r.get(v, b.StorageScope.APPLICATION);
						return (
							z && U && z !== U.session && this.z(),
							U === null && z && this.z(),
							U &&
								this.r.store(
									v,
									U.session,
									b.StorageScope.APPLICATION,
									b.StorageTarget.MACHINE,
								),
							U
						);
					}
					async clear() {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						await this.deleteCollection(),
							await this.deleteResources(),
							this.z();
					}
					async getActivityData() {
						if (!this.a)
							throw new Error("No settings sync store url configured.");
						const A = (0, r.$nh)(this.a, "download").toString(),
							R = {},
							O = await this.C(
								A,
								{ type: "GET", headers: R },
								[],
								i.CancellationToken.None,
							);
						if (!(0, o.$Cq)(O))
							throw new s.$ZRb(
								"Server returned " + O.res.statusCode,
								A,
								s.UserDataSyncErrorCode.EmptyResponse,
								O.res.statusCode,
								O.res.headers[s.$VRb],
							);
						if ((0, o.$Dq)(O))
							throw new s.$ZRb(
								"Empty response",
								A,
								s.UserDataSyncErrorCode.EmptyResponse,
								O.res.statusCode,
								O.res.headers[s.$VRb],
							);
						return O.stream;
					}
					y(A, R, O) {
						return R
							? (0, r.$nh)(A, "collection", R, "resource", O)
							: (0, r.$nh)(A, "resource", O);
					}
					z() {
						this.r.remove(v, b.StorageScope.APPLICATION),
							this.r.remove(S, b.StorageScope.APPLICATION);
					}
					async C(A, R, O, B) {
						if (!this.b)
							throw new s.$ZRb(
								"No Auth Token Available",
								A,
								s.UserDataSyncErrorCode.Unauthorized,
								void 0,
								void 0,
							);
						if (this.j && Date.now() < this.j.getTime())
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because of too many requests (429).`,
								A,
								s.UserDataSyncErrorCode.TooManyRequestsAndRetryAfter,
								void 0,
								void 0,
							);
						this.w(void 0);
						const U = await this.c;
						(R.headers = {
							...(R.headers || {}),
							...U,
							"X-Account-Type": this.b.type,
							authorization: `Bearer ${this.b.token}`,
						}),
							this.F(R.headers),
							this.q.trace("Sending request to server", {
								url: A,
								type: R.type,
								headers: { ...R.headers, authorization: void 0 },
							});
						let z;
						try {
							z = await this.f.request(A, R, B);
						} catch (V) {
							if (!(V instanceof s.$ZRb)) {
								let G = s.UserDataSyncErrorCode.RequestFailed;
								const K = (0, w.$bb)(V).toLowerCase();
								K.includes("xhr timeout")
									? (G = s.UserDataSyncErrorCode.RequestTimeout)
									: K.includes("protocol") && K.includes("not supported")
										? (G = s.UserDataSyncErrorCode.RequestProtocolNotSupported)
										: K.includes("request path contains unescaped characters")
											? (G = s.UserDataSyncErrorCode.RequestPathNotEscaped)
											: K.includes("headers must be an object")
												? (G = s.UserDataSyncErrorCode.RequestHeadersNotObject)
												: (0, w.$8)(V) &&
													(G = s.UserDataSyncErrorCode.RequestCanceled),
									(V = new s.$ZRb(
										`Connection refused for the request '${A}'.`,
										A,
										G,
										void 0,
										void 0,
									));
							}
							throw (this.q.info("Request failed", A), V);
						}
						const F = z.res.headers[s.$VRb],
							x = {
								url: A,
								status: z.res.statusCode,
								"execution-id": R.headers[s.$WRb],
								"operation-id": F,
							},
							H =
								(0, o.$Cq)(z) ||
								(z.res.statusCode && O.includes(z.res.statusCode));
						let q = "";
						if (
							(H
								? this.q.trace("Request succeeded", x)
								: ((q = (await (0, o.$Eq)(z)) || ""),
									this.q.info("Request failed", x, q)),
							z.res.statusCode === 401 || z.res.statusCode === 403)
						) {
							if (((this.b = void 0), z.res.statusCode === 401))
								throw (
									(this.g.fire(s.UserDataSyncErrorCode.Unauthorized),
									new s.$ZRb(
										`${R.type} request '${A}' failed because of Unauthorized (401).`,
										A,
										s.UserDataSyncErrorCode.Unauthorized,
										z.res.statusCode,
										F,
									))
								);
							if (z.res.statusCode === 403)
								throw (
									(this.g.fire(s.UserDataSyncErrorCode.Forbidden),
									new s.$ZRb(
										`${R.type} request '${A}' failed because the access is forbidden (403).`,
										A,
										s.UserDataSyncErrorCode.Forbidden,
										z.res.statusCode,
										F,
									))
								);
						}
						if ((this.h.fire(), z.res.statusCode === 404))
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because the requested resource is not found (404).`,
								A,
								s.UserDataSyncErrorCode.NotFound,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 405)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because the requested endpoint is not found (405). ${q}`,
								A,
								s.UserDataSyncErrorCode.MethodNotFound,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 409)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because of Conflict (409). There is new data for this resource. Make the request again with latest data.`,
								A,
								s.UserDataSyncErrorCode.Conflict,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 410)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because the requested resource is not longer available (410).`,
								A,
								s.UserDataSyncErrorCode.Gone,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 412)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because of Precondition Failed (412). There is new data for this resource. Make the request again with latest data.`,
								A,
								s.UserDataSyncErrorCode.PreconditionFailed,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 413)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed because of too large payload (413).`,
								A,
								s.UserDataSyncErrorCode.TooLarge,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 426)
							throw new s.$ZRb(
								`${R.type} request '${A}' failed with status Upgrade Required (426). Please upgrade the client and try again.`,
								A,
								s.UserDataSyncErrorCode.UpgradeRequired,
								z.res.statusCode,
								F,
							);
						if (z.res.statusCode === 429) {
							const V = z.res.headers["retry-after"];
							throw V
								? (this.w(new Date(Date.now() + parseInt(V) * 1e3)),
									new s.$ZRb(
										`${R.type} request '${A}' failed because of too many requests (429).`,
										A,
										s.UserDataSyncErrorCode.TooManyRequestsAndRetryAfter,
										z.res.statusCode,
										F,
									))
								: new s.$ZRb(
										`${R.type} request '${A}' failed because of too many requests (429).`,
										A,
										s.UserDataSyncErrorCode.TooManyRequests,
										z.res.statusCode,
										F,
									);
						}
						if (!H)
							throw new s.$ZRb(
								"Server returned " + z.res.statusCode,
								A,
								s.UserDataSyncErrorCode.Unknown,
								z.res.statusCode,
								F,
							);
						return z;
					}
					F(A) {
						let R = this.r.get(S, b.StorageScope.APPLICATION);
						R === void 0 &&
							((R = (0, h.$9g)()),
							this.r.store(
								S,
								R,
								b.StorageScope.APPLICATION,
								b.StorageTarget.MACHINE,
							)),
							(A["X-Machine-Session-Id"] = R);
						const O = this.r.get(v, b.StorageScope.APPLICATION);
						O !== void 0 && (A["X-User-Session-Id"] = O);
					}
				};
				(e.$5xc = L),
					(e.$5xc = L =
						Ne(
							[
								j(1, p.$Bk),
								j(2, o.$Aq),
								j(3, s.$9Rb),
								j(4, n.$Ti),
								j(5, g.$ll),
								j(6, b.$lq),
							],
							L,
						));
				let D = class extends L {
					constructor(A, R, O, B, U, z, F) {
						super(A.userDataSyncStore?.url, R, O, B, U, z, F),
							this.D(
								A.onDidChangeUserDataSyncStore(() =>
									this.s(A.userDataSyncStore?.url),
								),
							);
					}
				};
				(e.$6xc = D),
					(e.$6xc = D =
						Ne(
							[
								j(0, s.$SRb),
								j(1, p.$Bk),
								j(2, o.$Aq),
								j(3, s.$9Rb),
								j(4, n.$Ti),
								j(5, g.$ll),
								j(6, b.$lq),
							],
							D,
						));
				class M {
					constructor(A, R, O, B) {
						(this.c = A),
							(this.d = R),
							(this.f = O),
							(this.g = B),
							(this.a = []),
							(this.b = void 0);
					}
					request(A, R, O) {
						if ((this.h() && this.i(), (R.url = A), this.a.length >= this.c))
							throw (
								(this.g.info("Too many requests", ...this.a),
								new s.$ZRb(
									`Too many requests. Only ${this.c} requests allowed in ${this.d / (1e3 * 60)} minutes.`,
									A,
									s.UserDataSyncErrorCode.LocalTooManyRequests,
									void 0,
									void 0,
								))
							);
						return (
							(this.b = this.b || new Date()),
							this.a.push(A),
							this.f.request(R, O)
						);
					}
					h() {
						return (
							this.b !== void 0 &&
							new Date().getTime() - this.b.getTime() > this.d
						);
					}
					i() {
						(this.a = []), (this.b = void 0);
					}
				}
				e.$7xc = M;
			},
		),
		