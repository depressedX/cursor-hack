import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/strings.js';
import './extensionManagement.js';
import '../../extensions/common/extensions.js';
import '../../../base/common/platform.js';
import '../../../base/common/uri.js';
import '../../../base/common/errors.js';
import '../../../base/common/process.js';
import '../../telemetry/common/telemetryUtils.js';
define(
			de[154],
			he([1, 0, 37, 119, 109, 12, 9, 29, 344, 269]),
			function (ce /*require*/,
 e /*exports*/,
 t /*strings*/,
 i /*extensionManagement*/,
 w /*extensions*/,
 E /*platform*/,
 C /*uri*/,
 d /*errors*/,
 m /*process*/,
 r /*telemetryUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dq = e.$8p = void 0),
					(e.$7p = u),
					(e.$9p = n),
					(e.$0p = g),
					(e.$$p = p),
					(e.$_p = o),
					(e.$aq = f),
					(e.$bq = b),
					(e.$cq = s),
					(e.$eq = l),
					(e.$fq = $);
				function u(v, S) {
					return v.uuid && S.uuid
						? v.uuid === S.uuid
						: v.id === S.id
							? !0
							: (0, t.$Hf)(v.id, S.id) === 0;
				}
				const a = /^([^.]+\..+)-(\d+\.\d+\.\d+)(-(.+))?$/;
				class h {
					static create(S) {
						const I = S.manifest ? S.manifest.version : S.version,
							T = S.manifest ? S.targetPlatform : S.properties.targetPlatform;
						return new h(S.identifier, I, T);
					}
					static parse(S) {
						const I = a.exec(S);
						return I && I[1] && I[2]
							? new h({ id: I[1] }, I[2], I[4] || void 0)
							: null;
					}
					constructor(S, I, T = w.TargetPlatform.UNDEFINED) {
						(this.identifier = S),
							(this.version = I),
							(this.targetPlatform = T),
							(this.id = S.id);
					}
					toString() {
						return `${this.id}-${this.version}${this.targetPlatform !== w.TargetPlatform.UNDEFINED ? `-${this.targetPlatform}` : ""}`;
					}
					equals(S) {
						return S instanceof h
							? u(this, S) &&
									this.version === S.version &&
									this.targetPlatform === S.targetPlatform
							: !1;
					}
				}
				e.$8p = h;
				const c = /^([^.]+\..+)@((prerelease)|(\d+\.\d+\.\d+(-.*)?))$/;
				function n(v) {
					const S = c.exec(v);
					return S && S[1] ? [p(S[1]), S[2]] : [p(v), void 0];
				}
				function g(v, S) {
					return `${v}.${S}`;
				}
				function p(v) {
					return v.toLowerCase();
				}
				function o(v, S) {
					return p(g(v ?? w.$Cn, S));
				}
				function f(v, S) {
					const I = [],
						T = (P) => {
							for (const k of I) if (k.some((L) => u(S(L), S(P)))) return k;
							return null;
						};
					for (const P of v) {
						const k = T(P);
						k ? k.push(P) : I.push([P]);
					}
					return I;
				}
				function b(v) {
					return {
						id: v.identifier.id,
						name: v.manifest.name,
						galleryId: null,
						publisherId: v.publisherId,
						publisherName: v.manifest.publisher,
						publisherDisplayName: v.publisherDisplayName,
						dependencies:
							v.manifest.extensionDependencies &&
							v.manifest.extensionDependencies.length > 0,
					};
				}
				function s(v) {
					return {
						id: new r.$Qp(v.identifier.id),
						name: new r.$Qp(v.name),
						version: v.version,
						galleryId: v.identifier.uuid,
						publisherId: v.publisherId,
						publisherName: v.publisher,
						publisherDisplayName: v.publisherDisplayName,
						isPreReleaseVersion: v.properties.isPreReleaseVersion,
						dependencies: !!(
							v.properties.dependencies && v.properties.dependencies.length > 0
						),
						isSigned: v.isSigned,
						...v.telemetryData,
					};
				}
				e.$dq = new w.$Gn("pprice.better-merge");
				function l(v, S) {
					const I = [],
						T = S.manifest.extensionDependencies?.slice(0) ?? [];
					for (; T.length; ) {
						const P = T.shift();
						if (P && I.every((k) => !u(k.identifier, { id: P }))) {
							const k = v.filter((L) => u(L.identifier, { id: P }));
							k.length === 1 &&
								(I.push(k[0]),
								T.push(
									...(k[0].manifest.extensionDependencies?.slice(0) ?? []),
								));
						}
					}
					return I;
				}
				async function y(v, S) {
					if (!E.$n) return !1;
					let I;
					try {
						I = (
							await v.readFile(C.URI.file("/etc/os-release"))
						).value.toString();
					} catch {
						try {
							I = (
								await v.readFile(C.URI.file("/usr/lib/os-release"))
							).value.toString();
						} catch (P) {
							S.debug(
								"Error while getting the os-release file.",
								(0, d.$bb)(P),
							);
						}
					}
					return (
						!!I && (I.match(/^ID=([^\u001b\r\n]*)/m) || [])[1] === "alpine"
					);
				}
				async function $(v, S) {
					const I = await y(v, S),
						T = (0, i.$Ap)(I ? "alpine" : E.$x, m.$jc);
					return S.debug("ComputeTargetPlatform:", T), T;
				}
			},
		)
