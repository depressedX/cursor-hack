import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/platform.js';
import '../../../base/common/process.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../base/common/uuid.js';
import '../../../base/parts/request/common/request.js';
import '../../configuration/common/configuration.js';
import '../../environment/common/environment.js';
import './extensionManagement.js';
import './extensionManagementUtil.js';
import '../../externalServices/common/marketplace.js';
import '../../extensions/common/extensions.js';
import '../../extensions/common/extensionValidator.js';
import '../../files/common/files.js';
import '../../log/common/log.js';
import '../../product/common/product.js';
import '../../product/common/productService.js';
import '../../request/common/request.js';
import '../../storage/common/storage.js';
import '../../telemetry/common/telemetry.js';
import '../../../base/common/semver/semver.js';
import '../../../base/common/stopwatch.js';
define(
		de[782],
		he([
			1, 0, 24, 33, 29, 12, 344, 28, 9, 47, 1134, 10, 113, 119, 154, 2899, 109,
			772, 22, 34, 372, 62, 327, 21, 32, 464, 162,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*arrays*/,
			i /*cancellation*/,
			w /*errors*/,
			E /*platform*/,
			C /*process*/,
			d /*types*/,
			m /*uri*/,
			r /*uuid*/,
			u /*request*/,
			a /*configuration*/,
			h /*environment*/,
			c /*extensionManagement*/,
			n /*extensionManagementUtil*/,
			g /*marketplace*/,
			p /*extensions*/,
			o /*extensionValidator*/,
			f /*files*/,
			b /*log*/,
			s /*product*/,
			l /*productService*/,
			y /*request*/,
			$ /*storage*/,
			v /*telemetry*/,
			S /*semver*/,
			I /*stopwatch*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Sq =
					e.$Rq =
					e.$Pq =
					e.$Oq =
					e.$Nq =
					e.$Mq =
					e.$Lq =
					e.$Kq =
					e.$Jq =
					e.$Iq =
						void 0),
				(e.$Qq = le),
				(s = xi(s)),
				(S = mt(S));
			const T = E.$r ? p.TargetPlatform.WEB : (0, c.$Ap)(E.$x, C.$jc),
				P = "X-Market-Search-Activity-Id",
				k = "X-Cursor-Activity-Id";
			e.$Iq = (
				s.default.extensionMaxVersions
					? Object.keys(s.default.extensionMaxVersions)
					: []
			).map((ue) => ue.toLowerCase());
			const L = (ue) => e.$Iq.some((fe) => ue.toLowerCase() === fe);
			e.$Jq = L;
			const D = (ue) => {
				const fe = s.default.extensionMaxVersions;
				if (fe && Object.keys(fe).includes(ue.toLowerCase()))
					return fe[ue.toLowerCase()].maxVersion;
			};
			e.$Kq = D;
			const M = (ue) => {
				const fe = s.default.extensionMaxVersions;
				if (!fe) return !0;
				for (const me of e.$Iq)
					if (me === (0, n.$_p)(ue.publisher, ue.name).toLowerCase()) {
						const ve = S.lte(ue.version, fe[me].maxVersion),
							ge = fe[me].minVersion,
							be = ge === void 0 ? !0 : S.gte(ue.version, ge);
						return ve && be;
					}
				return !0;
			};
			(e.$Lq = M),
				(e.$Mq = (
					s.default.bannedExtensions
						? Object.keys(s.default.bannedExtensions)
						: []
				).map((ue) => ue.toLowerCase())),
				(e.$Nq = (s.default.cannotImportExtensions ?? []).map((ue) =>
					ue.toLowerCase(),
				));
			const N = (ue) =>
				e.$Mq.includes((0, n.$_p)(ue.publisher, ue.name).toLowerCase());
			e.$Oq = N;
			const A = (ue) => {
				const fe = s.default.bannedExtensions;
				if (!fe) return;
				const me = (0, n.$_p)(ue.publisher, ue.name).toLowerCase();
				if (Object.keys(fe).includes(me)) return fe[me].message;
			};
			e.$Pq = A;
			var R;
			(function (ue) {
				(ue[(ue.None = 0)] = "None"),
					(ue[(ue.IncludeVersions = 1)] = "IncludeVersions"),
					(ue[(ue.IncludeFiles = 2)] = "IncludeFiles"),
					(ue[(ue.IncludeCategoryAndTags = 4)] = "IncludeCategoryAndTags"),
					(ue[(ue.IncludeSharedAccounts = 8)] = "IncludeSharedAccounts"),
					(ue[(ue.IncludeVersionProperties = 16)] = "IncludeVersionProperties"),
					(ue[(ue.ExcludeNonValidated = 32)] = "ExcludeNonValidated"),
					(ue[(ue.IncludeInstallationTargets = 64)] =
						"IncludeInstallationTargets"),
					(ue[(ue.IncludeAssetUri = 128)] = "IncludeAssetUri"),
					(ue[(ue.IncludeStatistics = 256)] = "IncludeStatistics"),
					(ue[(ue.IncludeLatestVersionOnly = 512)] =
						"IncludeLatestVersionOnly"),
					(ue[(ue.Unpublished = 4096)] = "Unpublished"),
					(ue[(ue.IncludeNameConflictInfo = 32768)] =
						"IncludeNameConflictInfo");
			})(R || (R = {}));
			function O(...ue) {
				return String(ue.reduce((fe, me) => fe | me, 0));
			}
			var B;
			(function (ue) {
				(ue[(ue.Tag = 1)] = "Tag"),
					(ue[(ue.ExtensionId = 4)] = "ExtensionId"),
					(ue[(ue.Category = 5)] = "Category"),
					(ue[(ue.ExtensionName = 7)] = "ExtensionName"),
					(ue[(ue.Target = 8)] = "Target"),
					(ue[(ue.Featured = 9)] = "Featured"),
					(ue[(ue.SearchText = 10)] = "SearchText"),
					(ue[(ue.ExcludeWithFlags = 12)] = "ExcludeWithFlags");
			})(B || (B = {}));
			const U = {
					Icon: "Microsoft.VisualStudio.Services.Icons.Default",
					Details: "Microsoft.VisualStudio.Services.Content.Details",
					Changelog: "Microsoft.VisualStudio.Services.Content.Changelog",
					Manifest: "Microsoft.VisualStudio.Code.Manifest",
					VSIX: "Microsoft.VisualStudio.Services.VSIXPackage",
					License: "Microsoft.VisualStudio.Services.Content.License",
					Repository: "Microsoft.VisualStudio.Services.Links.Source",
					Signature: "Microsoft.VisualStudio.Services.VsixSignature",
				},
				z = {
					Dependency: "Microsoft.VisualStudio.Code.ExtensionDependencies",
					ExtensionPack: "Microsoft.VisualStudio.Code.ExtensionPack",
					Engine: "Microsoft.VisualStudio.Code.Engine",
					PreRelease: "Microsoft.VisualStudio.Code.PreRelease",
					EnabledApiProposals:
						"Microsoft.VisualStudio.Code.EnabledApiProposals",
					LocalizedLanguages: "Microsoft.VisualStudio.Code.LocalizedLanguages",
					WebExtension: "Microsoft.VisualStudio.Code.WebExtension",
					SponsorLink: "Microsoft.VisualStudio.Code.SponsorLink",
					SupportLink: "Microsoft.VisualStudio.Services.Links.Support",
					ExecutesCode: "Microsoft.VisualStudio.Code.ExecutesCode",
				},
				x = {
					pageNumber: 1,
					pageSize: 10,
					sortBy: c.SortBy.NoneOrRelevance,
					sortOrder: c.SortOrder.Default,
					flags: R.None,
					criteria: [],
					assetTypes: [],
				};
			class H {
				constructor(fe = x) {
					this.d = fe;
				}
				get pageNumber() {
					return this.d.pageNumber;
				}
				get pageSize() {
					return this.d.pageSize;
				}
				get sortBy() {
					return this.d.sortBy;
				}
				get sortOrder() {
					return this.d.sortOrder;
				}
				get flags() {
					return this.d.flags;
				}
				get criteria() {
					return this.d.criteria;
				}
				withPage(fe, me = this.d.pageSize) {
					return new H({ ...this.d, pageNumber: fe, pageSize: me });
				}
				withFilter(fe, ...me) {
					const ve = [
						...this.d.criteria,
						...(me.length
							? me.map((ge) => ({ filterType: fe, value: ge }))
							: [{ filterType: fe }]),
					];
					return new H({ ...this.d, criteria: ve });
				}
				withSortBy(fe) {
					return new H({ ...this.d, sortBy: fe });
				}
				withSortOrder(fe) {
					return new H({ ...this.d, sortOrder: fe });
				}
				withFlags(...fe) {
					return new H({ ...this.d, flags: fe.reduce((me, ve) => me | ve, 0) });
				}
				withAssetTypes(...fe) {
					return new H({ ...this.d, assetTypes: fe });
				}
				withSource(fe) {
					return new H({ ...this.d, source: fe });
				}
				get raw() {
					const {
						criteria: fe,
						pageNumber: me,
						pageSize: ve,
						sortBy: ge,
						sortOrder: be,
						flags: Ce,
						assetTypes: Le,
					} = this.d;
					return {
						filters: [
							{
								criteria: fe,
								pageNumber: me,
								pageSize: ve,
								sortBy: ge,
								sortOrder: be,
							},
						],
						assetTypes: Le,
						flags: Ce,
					};
				}
				get searchText() {
					const fe = this.d.criteria.filter(
						(me) => me.filterType === B.SearchText,
					)[0];
					return fe && fe.value ? fe.value : "";
				}
				get telemetryData() {
					return {
						filterTypes: this.d.criteria.map((fe) => String(fe.filterType)),
						flags: this.d.flags,
						sortBy: String(this.sortBy),
						sortOrder: String(this.sortOrder),
						pageNumber: String(this.pageNumber),
						source: this.d.source,
						searchTextLength: this.searchText.length,
					};
				}
			}
			function q(ue, fe) {
				const me = (ue || []).filter((ve) => ve.statisticName === fe)[0];
				return me ? me.value : 0;
			}
			function V(ue) {
				const fe = "Microsoft.VisualStudio.Code.Translation.";
				return ue.files
					.filter((ve) => ve.assetType.indexOf(fe) === 0)
					.reduce((ve, ge) => {
						const be = J(ue, ge.assetType);
						return be && ve.push([ge.assetType.substring(fe.length), be]), ve;
					}, []);
			}
			function G(ue) {
				if (ue.properties) {
					const fe = ue.properties.filter((ge) => ge.key === U.Repository),
						me = new RegExp(
							"((git|ssh|http(s)?)|(git@[\\w.]+))(:(//)?)([\\w.@:/\\-~]+)(.git)(/)?",
						),
						ve = fe.filter((ge) => me.test(ge.value))[0];
					return ve ? { uri: ve.value, fallbackUri: ve.value } : null;
				}
				return J(ue, U.Repository);
			}
			function K(ue) {
				return {
					uri: `${ue.fallbackAssetUri}/${U.VSIX}?redirect=true${ue.targetPlatform ? `&targetPlatform=${ue.targetPlatform}` : ""}`,
					fallbackUri: `${ue.fallbackAssetUri}/${U.VSIX}${ue.targetPlatform ? `?targetPlatform=${ue.targetPlatform}` : ""}`,
				};
			}
			function J(ue, fe) {
				return ue.files.filter((ve) => ve.assetType === fe)[0]
					? {
							uri: `${ue.assetUri}/${fe}${ue.targetPlatform ? `?targetPlatform=${ue.targetPlatform}` : ""}`,
							fallbackUri: `${ue.fallbackAssetUri}/${fe}${ue.targetPlatform ? `?targetPlatform=${ue.targetPlatform}` : ""}`,
						}
					: null;
			}
			function W(ue, fe) {
				const me = ue.properties
						? ue.properties.filter((ge) => ge.key === fe)
						: [],
					ve = me.length > 0 && me[0].value;
				return ve ? ve.split(",").map((ge) => (0, n.$$p)(ge)) : [];
			}
			function X(ue) {
				return W(ue, z.Dependency).map(
					(me) => s.default.modifiedExtensionDependencies?.[me] ?? me,
				);
			}
			function Y(ue) {
				const fe = ue.properties
					? ue.properties.filter((me) => me.key === z.Engine)
					: [];
				return (fe.length > 0 && fe[0].value) || "";
			}
			function ie(ue) {
				const fe = ue.properties
					? ue.properties.filter((me) => me.key === z.PreRelease)
					: [];
				return fe.length > 0 && fe[0].value === "true";
			}
			function ne(ue) {
				const fe = ue.properties
					? ue.properties.filter((me) => me.key === z.ExecutesCode)
					: [];
				return fe.length > 0 ? fe[0].value === "true" : void 0;
			}
			function ee(ue) {
				const fe = ue.properties
						? ue.properties.filter((ve) => ve.key === z.EnabledApiProposals)
						: [],
					me = (fe.length > 0 && fe[0].value) || "";
				return me ? me.split(",") : [];
			}
			function _(ue) {
				const fe = ue.properties
						? ue.properties.filter((ve) => ve.key === z.LocalizedLanguages)
						: [],
					me = (fe.length > 0 && fe[0].value) || "";
				return me ? me.split(",") : [];
			}
			function te(ue) {
				return ue.properties?.find((fe) => fe.key === z.SponsorLink)?.value;
			}
			function Q(ue) {
				return ue.properties?.find((fe) => fe.key === z.SupportLink)?.value;
			}
			function Z(ue) {
				return ue.indexOf("preview") !== -1;
			}
			function se(ue) {
				return ue.targetPlatform
					? (0, c.$zp)(ue.targetPlatform)
					: p.TargetPlatform.UNDEFINED;
			}
			function re(ue) {
				const fe = (0, t.$Qb)(ue.versions.map(se)),
					me = !!ue.tags?.includes(c.$tp),
					ve = fe.indexOf(p.TargetPlatform.WEB);
				return (
					me
						? ve === -1 && fe.push(p.TargetPlatform.WEB)
						: ve !== -1 && fe.splice(ve, 1),
					fe
				);
			}
			function le(ue, fe) {
				for (let me = 0; me < ue.length; me++) {
					const ve = ue[me];
					if (ve.version === ue[me - 1]?.version) {
						let ge = me;
						if (se(ve) === fe)
							for (; ge > 0 && ue[ge - 1].version === ve.version; ) ge--;
						ge !== me && (ue.splice(me, 1), ue.splice(ge, 0, ve));
					}
				}
				return ue;
			}
			function oe(ue, fe, me) {
				ue.telemetryData = {
					index: fe,
					querySource: me,
					queryActivityId: ue.queryContext?.[P],
				};
			}
			function ae(ue, fe, me, ve) {
				const ge = ue.versions[0],
					be = {
						manifest: J(fe, U.Manifest),
						readme: J(fe, U.Details),
						changelog: J(fe, U.Changelog),
						license: J(fe, U.License),
						repository: G(fe),
						download: K(fe),
						icon: J(fe, U.Icon),
						signature: J(fe, U.Signature),
						coreTranslations: V(fe),
					};
				return {
					type: "gallery",
					identifier: {
						id: (0, n.$_p)(ue.publisher.publisherName, ue.extensionName),
						uuid: ue.extensionId,
					},
					name: ue.extensionName,
					version: fe.version,
					displayName: ue.displayName,
					publisherId: ue.publisher.publisherId,
					publisher: ue.publisher.publisherName,
					publisherDisplayName: ue.publisher.displayName,
					publisherDomain: ue.publisher.domain
						? {
								link: ue.publisher.domain,
								verified: !!ue.publisher.isDomainVerified,
							}
						: void 0,
					publisherSponsorLink: te(ge),
					description: ue.shortDescription ?? "",
					installCount: q(ue.statistics, "install"),
					rating: q(ue.statistics, "averagerating"),
					ratingCount: q(ue.statistics, "ratingcount"),
					categories: ue.categories || [],
					tags: ue.tags || [],
					releaseDate: Date.parse(ue.releaseDate),
					lastUpdated: Date.parse(ue.lastUpdated),
					allTargetPlatforms: me,
					assets: be,
					properties: {
						dependencies: X(fe),
						extensionPack: W(fe, z.ExtensionPack),
						engine: Y(fe),
						enabledApiProposals: ee(fe),
						localizedLanguages: _(fe),
						targetPlatform: se(fe),
						isPreReleaseVersion: ie(fe),
						executesCode: ne(fe),
					},
					hasPreReleaseVersion: ie(ge),
					hasReleaseVersion: !0,
					preview: Z(ue.flags),
					isSigned: !!be.signature,
					queryContext: ve,
					supportLink: Q(ge),
				};
			}
			let pe = class {
				constructor(fe, me, ve, ge, be, Ce, Le, Fe) {
					(this.n = me),
						(this.o = ve),
						(this.q = ge),
						(this.u = be),
						(this.w = Ce),
						(this.y = Le),
						(this.z = Fe),
						(this.k = () => Promise.resolve(void 0));
					const Oe = Le.extensionsGallery,
						xe =
							Oe?.servicePPEUrl && Fe.getValue("_extensionsGallery.enablePPE");
					(this.galleryId = Oe?.galleryId || ""),
						(this.d = xe ? Oe.servicePPEUrl : Oe?.serviceUrl),
						(this.g = xe ? void 0 : Oe?.searchUrl),
						(this.h = Oe?.controlUrl),
						(this.l =
							Le.extensionsEnabledWithApiProposalVersion?.map((He) =>
								He.toLowerCase(),
							) ?? []),
						(this.j = (0, g.resolveMarketplaceHeaders)(
							Le,
							this.q,
							this.z,
							this.w,
							fe,
							this.u,
						));
				}
				registerBearerTokenProvider(fe) {
					this.k = fe;
				}
				A(fe = "") {
					return `${this.d}${fe}`;
				}
				isEnabled() {
					return !!this.d;
				}
				async getExtensions(fe, me, ve, ge) {
					const be = i.CancellationToken.isCancellationToken(me) ? {} : me,
						Ce = i.CancellationToken.isCancellationToken(me) ? me : ve,
						Le = await this.B(fe, be, Ce, ge),
						Fe = Le.map((xe) => xe.identifier.uuid),
						Oe = [];
					for (const xe of fe)
						xe.uuid &&
							!Fe.includes(xe.uuid) &&
							Oe.push({ ...xe, uuid: void 0 });
					if (Oe.length) {
						this.u.publicLog2("galleryService:additionalQueryByName", {
							count: Oe.length,
						});
						const xe = await this.B(Oe, be, Ce, ge);
						Le.push(...xe);
					}
					return Le;
				}
				async B(fe, me, ve, ge) {
					const be = [],
						Ce = [],
						Le = [],
						Fe = [];
					let Oe = !0;
					for (const Ke of fe) {
						Ke.uuid ? Ce.push(Ke.uuid) : be.push(Ke.id);
						const Je = !!(Ke.version || Ke.preRelease);
						Le.push({ id: Ke.id, uuid: Ke.uuid, includePreRelease: Je }),
							Ke.version &&
								Fe.push({ id: Ke.id, uuid: Ke.uuid, version: Ke.version }),
							(Oe = Oe && !!Ke.hasPreRelease && !Je);
					}
					if (!Ce.length && !be.length) return [];
					let xe = new H().withPage(1, fe.length);
					Ce.length && (xe = xe.withFilter(B.ExtensionId, ...Ce)),
						be.length && (xe = xe.withFilter(B.ExtensionName, ...be)),
						(me.queryAllVersions || Oe) &&
							(xe = xe.withFlags(xe.flags, R.IncludeVersions)),
						me.source && (xe = xe.withSource(me.source));
					const { extensions: He } = await this.E(
						xe,
						{
							targetPlatform: me.targetPlatform ?? T,
							includePreRelease: Le,
							versions: Fe,
							compatible: !!me.compatible,
							productVersion: me.productVersion ?? {
								version: this.y.version,
								date: this.y.date,
								vscodeVersion: this.y.vscodeVersion,
							},
						},
						ve,
						ge,
					);
					return me.source && He.forEach((Ke, Je) => oe(Ke, Je, me.source)), He;
				}
				async getCompatibleExtension(
					fe,
					me,
					ve,
					ge = {
						version: this.y.version,
						date: this.y.date,
						vscodeVersion: this.y.vscodeVersion,
					},
				) {
					if ((0, c.$Bp)(fe.allTargetPlatforms, ve)) return null;
					if (await this.isExtensionCompatible(fe, me, ve)) return fe;
					const be = new H()
							.withFlags(R.IncludeVersions)
							.withPage(1, 1)
							.withFilter(B.ExtensionId, fe.identifier.uuid),
						{ extensions: Ce } = await this.E(
							be,
							{
								targetPlatform: ve,
								compatible: !0,
								includePreRelease: me,
								productVersion: ge,
							},
							i.CancellationToken.None,
							fe.queryContext,
						);
					return Ce.filter(e.$Lq)[0] || null;
				}
				async isExtensionCompatible(
					fe,
					me,
					ve,
					ge = {
						version: this.y.version,
						date: this.y.date,
						vscodeVersion: this.y.vscodeVersion,
					},
				) {
					if (
						!(0, e.$Lq)(fe) ||
						!(0, c.$Cp)(
							fe.properties.targetPlatform,
							fe.allTargetPlatforms,
							ve,
						) ||
						(!me && fe.properties.isPreReleaseVersion)
					)
						return !1;
					let be = fe.properties.engine;
					if (!be) {
						const Ce = await this.getManifest(fe, i.CancellationToken.None);
						if (!Ce) throw new Error("Manifest was not found");
						be = Ce.engines.vscode;
					}
					return !(
						!(0, o.$yq)(be, ge.vscodeVersion, ge.date) ||
						!this.C(fe.identifier, fe.properties.enabledApiProposals)
					);
				}
				C(fe, me) {
					return !me || !this.l.includes(fe.id.toLowerCase())
						? !0
						: (0, o.$zq)(me);
				}
				async D(
					fe,
					me,
					ve,
					ge,
					be,
					Ce,
					Le = {
						version: this.y.version,
						date: this.y.date,
						vscodeVersion: this.y.vscodeVersion,
					},
				) {
					if (
						!(0, c.$Cp)(se(me), be, Ce) ||
						(ve !== "any" && ie(me) !== (ve === "prerelease"))
					)
						return !1;
					if (ge)
						try {
							const Fe = await this.J(fe, me);
							if (!(0, o.$yq)(Fe, Le.vscodeVersion, Le.date)) return !1;
						} catch (Fe) {
							return (
								this.o.error(
									`Error while getting the engine for the version ${me.version}.`,
									(0, w.$bb)(Fe),
								),
								!1
							);
						}
					return !0;
				}
				async query(fe, me) {
					let ve = fe.text || "";
					const ge = fe.pageSize ?? 50;
					let be = new H().withPage(1, ge);
					ve
						? ((ve = ve.replace(
								/\bcategory:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g,
								(xe, He, Ke) => (
									(be = be.withFilter(B.Category, Ke || He)), ""
								),
							)),
							(ve = ve.replace(
								/\btag:("([^"]*)"|([^"]\S*))(\s+|\b|$)/g,
								(xe, He, Ke) => ((be = be.withFilter(B.Tag, Ke || He)), ""),
							)),
							(ve = ve.replace(
								/\bfeatured(\s+|\b|$)/g,
								() => ((be = be.withFilter(B.Featured)), ""),
							)),
							(ve = ve.trim()),
							ve &&
								((ve = ve.length < 200 ? ve : ve.substring(0, 200)),
								(be = be.withFilter(B.SearchText, ve))),
							(be = be.withSortBy(c.SortBy.NoneOrRelevance)))
						: fe.ids
							? (be = be.withFilter(B.ExtensionId, ...fe.ids))
							: fe.names
								? (be = be.withFilter(B.ExtensionName, ...fe.names))
								: (be = be.withSortBy(c.SortBy.InstallCount)),
						typeof fe.sortBy == "number" && (be = be.withSortBy(fe.sortBy)),
						typeof fe.sortOrder == "number" &&
							(be = be.withSortOrder(fe.sortOrder)),
						fe.source && (be = be.withSource(fe.source));
					const Ce = async (xe, He) => {
							const { extensions: Ke, total: Je } = await this.E(
								xe,
								{
									targetPlatform: T,
									compatible: !1,
									includePreRelease: !!fe.includePreRelease,
									productVersion: fe.productVersion ?? {
										version: this.y.version,
										date: this.y.date,
										vscodeVersion: this.y.vscodeVersion,
									},
								},
								He,
								void 0,
							);
							return (
								Ke.forEach((Te, Ee) =>
									oe(Te, (xe.pageNumber - 1) * xe.pageSize + Ee, fe.source),
								),
								{ extensions: Ke, total: Je }
							);
						},
						{ extensions: Le, total: Fe } = await Ce(be, me),
						Oe = async (xe, He) => {
							if (He.isCancellationRequested) throw new w.$9();
							const { extensions: Ke } = await Ce(be.withPage(xe + 1), He);
							return Ke;
						};
					return {
						firstPage: Le,
						total: Fe,
						pageSize: be.pageSize,
						getPage: Oe,
					};
				}
				async E(fe, me, ve, ge) {
					const be = fe.flags;
					fe.flags & R.IncludeLatestVersionOnly &&
						fe.flags & R.IncludeVersions &&
						(fe = fe.withFlags(
							fe.flags & ~R.IncludeVersions,
							R.IncludeLatestVersionOnly,
						)),
						!(fe.flags & R.IncludeLatestVersionOnly) &&
							!(fe.flags & R.IncludeVersions) &&
							(fe = fe.withFlags(fe.flags, R.IncludeLatestVersionOnly)),
						me.versions?.length &&
							(fe = fe.withFlags(
								fe.flags & ~R.IncludeLatestVersionOnly,
								R.IncludeVersions,
							)),
						(fe = fe.withFlags(
							fe.flags,
							R.IncludeAssetUri,
							R.IncludeCategoryAndTags,
							R.IncludeFiles,
							R.IncludeStatistics,
							R.IncludeVersionProperties,
						));
					const {
						galleryExtensions: Ce,
						total: Le,
						context: Fe,
					} = await this.G(fe, ve, ge);
					if (!(fe.flags & R.IncludeLatestVersionOnly)) {
						const Ke = [];
						for (const Je of Ce) {
							const Te = await this.F(Je, me, Fe);
							Te && Ke.push(Te);
						}
						return { extensions: Ke, total: Le };
					}
					const xe = [],
						He = new Map();
					for (let Ke = 0; Ke < Ce.length; Ke++) {
						const Je = Ce[Ke],
							Te = {
								id: (0, n.$_p)(Je.publisher.publisherName, Je.extensionName),
								uuid: Je.extensionId,
							},
							Ee = (0, d.$rg)(me.includePreRelease)
								? me.includePreRelease
								: !!me.includePreRelease.find((Be) => (0, n.$7p)(Be, Te))
										?.includePreRelease;
						if (me.compatible && (0, c.$Bp)(re(Je), me.targetPlatform))
							continue;
						const Ie = await this.F(Je, me, Fe);
						!Ie ||
						(Ie.properties.isPreReleaseVersion &&
							(!Ee || !Ie.hasReleaseVersion)) ||
						(!Ie.properties.isPreReleaseVersion &&
							Ie.properties.targetPlatform !== me.targetPlatform &&
							Ie.hasPreReleaseVersion)
							? He.set(Je.extensionId, Ke)
							: xe.push([Ke, Ie]);
					}
					if (He.size) {
						const Ke = new I.$le(),
							Je = new H()
								.withFlags(be & ~R.IncludeLatestVersionOnly, R.IncludeVersions)
								.withPage(1, He.size)
								.withFilter(B.ExtensionId, ...He.keys()),
							{ extensions: Te } = await this.E(Je, me, ve, ge);
						this.u.publicLog2("galleryService:additionalQuery", {
							duration: Ke.elapsed(),
							count: He.size,
						});
						for (const Ee of Te) {
							const Ie = He.get(Ee.identifier.uuid);
							xe.push([Ie, Ee]);
						}
					}
					return {
						extensions: xe.sort((Ke, Je) => Ke[0] - Je[0]).map(([, Ke]) => Ke),
						total: Le,
					};
				}
				async F(fe, me, ve) {
					const ge = {
							id: (0, n.$_p)(fe.publisher.publisherName, fe.extensionName),
							uuid: fe.extensionId,
						},
						be = me.versions?.find((Oe) => (0, n.$7p)(Oe, ge))?.version,
						Ce = (0, d.$rg)(me.includePreRelease)
							? me.includePreRelease
							: !!me.includePreRelease.find((Oe) => (0, n.$7p)(Oe, ge))
									?.includePreRelease,
						Le = re(fe),
						Fe = le(fe.versions, me.targetPlatform);
					if (me.compatible && (0, c.$Bp)(Le, me.targetPlatform)) return null;
					for (let Oe = 0; Oe < Fe.length; Oe++) {
						const xe = Fe[Oe];
						if (!(be && xe.version !== be)) {
							if (
								await this.D(
									ge.id,
									xe,
									Ce ? "any" : "release",
									me.compatible,
									Le,
									me.targetPlatform,
									me.productVersion,
								)
							) {
								if (me.compatible && !this.C(ge, ee(xe))) continue;
								return ae(fe, xe, Le, ve);
							}
							if (be && xe.version === be) return null;
						}
					}
					return be || me.compatible ? null : ae(fe, fe.versions[0], Le);
				}
				async G(fe, me, ve) {
					if (!this.isEnabled())
						throw new Error("No extension gallery service configured.");
					fe = fe
						.withFlags(fe.flags, R.ExcludeNonValidated)
						.withFilter(B.Target, "Microsoft.VisualStudio.Code")
						.withFilter(B.ExcludeWithFlags, O(R.Unpublished));
					const ge = await this.j,
						be = await this.k(),
						Ce = `Bearer ${be}`,
						Le = this.galleryId === "cursor" && be ? { Authorization: Ce } : {},
						Fe =
							this.galleryId === "cursor" && ve && k in ve
								? { [k]: ve[k] }
								: { [k]: (0, r.$9g)() },
						Oe = JSON.stringify(fe.raw),
						xe = {
							...ge,
							"Content-Type": "application/json",
							Accept: "application/json;api-version=3.0-preview.1",
							"Accept-Encoding": "gzip",
							"Content-Length": String(Oe.length),
							...Le,
							...Fe,
						},
						He = new I.$le();
					let Ke,
						Je,
						Te = 0;
					try {
						const Ee =
							this.g && fe.criteria.some((Be) => Be.filterType === B.SearchText)
								? this.g
								: this.A("/extensionquery");
						if (
							((Ke = await this.n.request(
								{ type: "POST", url: Ee, data: Oe, headers: xe },
								me,
							)),
							Ke.res.statusCode &&
								Ke.res.statusCode >= 400 &&
								Ke.res.statusCode < 500)
						)
							return { galleryExtensions: [], total: Te };
						const Ie = await (0, y.$Gq)(Ke);
						if (Ie) {
							const Be = Ie.results[0];
							let Se = Be.extensions;
							const ke =
								Be.resultMetadata &&
								Be.resultMetadata.filter(
									(Ue) => Ue.metadataType === "ResultCount",
								)[0];
							return (
								(Te =
									(ke &&
										ke.metadataItems.filter((Ue) => Ue.name === "TotalCount")[0]
											.count) ||
									0),
								Se.forEach((Ue, qe) => {
									let Ae = Ue.versions;
									(0, e.$Jq)(
										(0, n.$_p)(Ue.publisher.publisherName, Ue.extensionName),
									) &&
										Ae.find((De) =>
											(0, e.$Lq)({
												name: Ue.extensionName,
												publisher: Ue.publisher.publisherName,
												version: De.version,
											}),
										) !== void 0 &&
										((Ae = Ae.filter((De) =>
											(0, e.$Lq)({
												name: Ue.extensionName,
												publisher: Ue.publisher.publisherName,
												version: De.version,
											}),
										)),
										Ae.length > 0 && (Se[qe] = { ...Ue, versions: Ae }));
									const Me = Ae.filter((De) => {
										const Re = Y(De);
										return (
											Re === "" ||
											(0, o.$yq)(Re, this.y.vscodeVersion, this.y.date)
										);
									});
									Me.length < Ae.length &&
										((Ae = Me),
										Ae.length > 0 && (Se[qe] = { ...Ue, versions: Ae }));
								}),
								{
									galleryExtensions: Se,
									total: Te,
									context: Ke.res.headers.activityid
										? { [P]: Ke.res.headers.activityid, ...Fe }
										: Fe,
								}
							);
						}
						return { galleryExtensions: [], total: Te };
					} catch (Ee) {
						if ((0, w.$8)(Ee))
							throw ((Je = c.ExtensionGalleryErrorCode.Cancelled), Ee);
						{
							const Ie = (0, w.$bb)(Ee);
							throw (
								((Je = (0, u.$pp)(Ee)
									? c.ExtensionGalleryErrorCode.Offline
									: Ie.startsWith("XHR timeout")
										? c.ExtensionGalleryErrorCode.Timeout
										: c.ExtensionGalleryErrorCode.Failed),
								new c.$Fp(Ie, Je))
							);
						}
					} finally {
						this.u.publicLog2("galleryService:query", {
							...fe.telemetryData,
							requestBodySize: String(Oe.length),
							duration: He.elapsed(),
							success: !!Ke && (0, y.$Cq)(Ke),
							responseBodySize: Ke?.res.headers["Content-Length"],
							statusCode: Ke ? String(Ke.res.statusCode) : void 0,
							errorCode: Je,
							count: String(Te),
						});
					}
				}
				async reportStatistic(fe, me, ve, ge) {
					if (!this.isEnabled()) return;
					const be = E.$r
							? this.A(
									`/itemName/${fe}.${me}/version/${ve}/statType/${ge === c.StatisticType.Install ? "1" : "3"}/vscodewebextension`,
								)
							: this.A(
									`/publishers/${fe}/extensions/${me}/${ve}/stats?statType=${ge}`,
								),
						Ce = E.$r
							? "api-version=6.1-preview.1"
							: "*/*;api-version=4.0-preview.1",
						Fe = { ...(await this.j), Accept: Ce };
					try {
						await this.n.request(
							{ type: "POST", url: be, headers: Fe },
							i.CancellationToken.None,
						);
					} catch {}
				}
				async download(fe, me, ve) {
					this.o.trace("ExtensionGalleryService#download", fe.identifier.id);
					const ge = (0, n.$cq)(fe),
						be = new Date().getTime(),
						Ce =
							ve === c.InstallOperation.Install
								? "install"
								: ve === c.InstallOperation.Update
									? "update"
									: "",
						Le = Ce
							? {
									uri: `${fe.assets.download.uri}${m.URI.parse(fe.assets.download.uri).query ? "&" : "?"}${Ce}=true`,
									fallbackUri: `${fe.assets.download.fallbackUri}${m.URI.parse(fe.assets.download.fallbackUri).query ? "&" : "?"}${Ce}=true`,
								}
							: fe.assets.download,
						Fe = fe.queryContext?.[P] ? { [P]: fe.queryContext[P] } : void 0,
						Oe = await this.I(
							fe.identifier.id,
							Le,
							U.VSIX,
							Fe ? { headers: Fe } : void 0,
						);
					try {
						await this.w.writeFile(me, Oe.stream);
					} catch (xe) {
						try {
							await this.w.del(me);
						} catch (He) {
							this.o.warn(
								`Error while deleting the file ${me.toString()}`,
								(0, w.$bb)(He),
							);
						}
						throw new c.$Fp(
							(0, w.$bb)(xe),
							c.ExtensionGalleryErrorCode.DownloadFailedWriting,
						);
					}
					this.u.publicLog("galleryService:downloadVSIX", {
						...ge,
						duration: new Date().getTime() - be,
					});
				}
				async downloadSignatureArchive(fe, me) {
					if (!fe.assets.signature) throw new Error("No signature asset found");
					this.o.trace(
						"ExtensionGalleryService#downloadSignatureArchive",
						fe.identifier.id,
					);
					const ve = await this.I(
						fe.identifier.id,
						fe.assets.signature,
						U.Signature,
					);
					try {
						await this.w.writeFile(me, ve.stream);
					} catch (ge) {
						try {
							await this.w.del(me);
						} catch (be) {
							this.o.warn(
								`Error while deleting the file ${me.toString()}`,
								(0, w.$bb)(be),
							);
						}
						throw new c.$Fp(
							(0, w.$bb)(ge),
							c.ExtensionGalleryErrorCode.DownloadFailedWriting,
						);
					}
				}
				async getReadme(fe, me) {
					if (fe.assets.readme) {
						const ve = await this.I(
							fe.identifier.id,
							fe.assets.readme,
							U.Details,
							{},
							me,
						);
						return (await (0, y.$Fq)(ve)) || "";
					}
					return "";
				}
				async getManifest(fe, me) {
					if (fe.assets.manifest) {
						const ve = await this.I(
								fe.identifier.id,
								fe.assets.manifest,
								U.Manifest,
								{},
								me,
							),
							ge = await (0, y.$Fq)(ve);
						return ge ? JSON.parse(ge) : null;
					}
					return null;
				}
				async H(fe, me, ve) {
					const ge = J(me, U.Manifest);
					if (!ge) throw new Error("Manifest was not found");
					const be = { "Accept-Encoding": "gzip" },
						Ce = await this.I(fe, ge, U.Manifest, { headers: be });
					return await (0, y.$Gq)(Ce);
				}
				async getCoreTranslation(fe, me) {
					const ve = fe.assets.coreTranslations.filter(
						(ge) => ge[0] === me.toUpperCase(),
					)[0];
					if (ve) {
						const ge = await this.I(fe.identifier.id, ve[1], ve[0]),
							be = await (0, y.$Fq)(ge);
						return be ? JSON.parse(be) : null;
					}
					return null;
				}
				async getChangelog(fe, me) {
					if (fe.assets.changelog) {
						const ve = await this.I(
							fe.identifier.id,
							fe.assets.changelog,
							U.Changelog,
							{},
							me,
						);
						return (await (0, y.$Fq)(ve)) || "";
					}
					return "";
				}
				async getAllCompatibleVersions(fe, me, ve, ge) {
					let be = new H()
						.withFlags(
							R.IncludeVersions,
							R.IncludeCategoryAndTags,
							R.IncludeFiles,
							R.IncludeVersionProperties,
						)
						.withPage(1, 1);
					fe.uuid
						? (be = be.withFilter(B.ExtensionId, fe.uuid))
						: (be = be.withFilter(B.ExtensionName, fe.id));
					const { galleryExtensions: Ce } = await this.G(
						be,
						i.CancellationToken.None,
						ge,
					);
					if (!Ce.length) return [];
					const Le = re(Ce[0]);
					if ((0, c.$Bp)(Le, ve)) return [];
					const Fe = [];
					await Promise.all(
						Ce[0].versions.map(async (He) => {
							try {
								(await this.D(fe.id, He, me ? "any" : "release", !0, Le, ve)) &&
									this.C(fe, ee(He)) &&
									Fe.push(He);
							} catch {}
						}),
					);
					const Oe = [],
						xe = new Set();
					for (const He of le(Fe, ve))
						xe.has(He.version) ||
							(xe.add(He.version),
							Oe.push({
								version: He.version,
								date: He.lastUpdated,
								isPreReleaseVersion: ie(He),
							}));
					return Oe;
				}
				async I(fe, me, ve, ge = {}, be = i.CancellationToken.None) {
					const Ce = await this.j,
						Le = { type: "GET" },
						Fe = { ...Ce, ...(ge.headers || {}) };
					ge = { ...ge, ...Le, headers: Fe };
					const Oe = me.uri,
						xe = me.fallbackUri,
						He = { ...ge, url: Oe };
					try {
						const Ke = await this.n.request(He, be);
						if (Ke.res.statusCode === 200) return Ke;
						const Je = await (0, y.$Fq)(Ke);
						throw new Error(`Expected 200, got back ${Ke.res.statusCode} instead.

${Je}`);
					} catch (Ke) {
						if ((0, w.$8)(Ke)) throw Ke;
						const Je = (0, w.$bb)(Ke);
						this.u.publicLog2("galleryService:cdnFallback", {
							extension: fe,
							assetType: ve,
							message: Je,
						});
						const Te = { ...ge, url: xe };
						return this.n.request(Te, be);
					}
				}
				async J(fe, me) {
					let ve = Y(me);
					if (!ve) {
						this.u.publicLog2("galleryService:engineFallback", {
							extension: fe,
							version: me.version,
						});
						const ge = await this.H(fe, me, i.CancellationToken.None);
						if (!ge) throw new Error("Manifest was not found");
						ve = ge.engines.vscode;
					}
					return ve;
				}
				async getExtensionsControlManifest() {
					if (!this.isEnabled())
						throw new Error("No extension gallery service configured.");
					if (!this.h) return { malicious: [], deprecated: {}, search: [] };
					const fe = await this.n.request(
						{ type: "GET", url: this.h },
						i.CancellationToken.None,
					);
					if (fe.res.statusCode !== 200)
						throw new Error("Could not get extensions report.");
					const me = await (0, y.$Gq)(fe),
						ve = [],
						ge = {},
						be = [],
						Ce = [];
					if (me) {
						for (const Le of me.malicious) ve.push({ id: Le });
						if (me.migrateToPreRelease)
							for (const [Le, Fe] of Object.entries(me.migrateToPreRelease))
								(!Fe.engine ||
									(0, o.$yq)(Fe.engine, this.y.vscodeVersion, this.y.date)) &&
									(ge[Le.toLowerCase()] = {
										disallowInstall: !0,
										extension: {
											id: Fe.id,
											displayName: Fe.displayName,
											autoMigrate: { storage: !!Fe.migrateStorage },
											preRelease: !0,
										},
									});
						if (me.deprecated)
							for (const [Le, Fe] of Object.entries(me.deprecated))
								Fe && (ge[Le.toLowerCase()] = (0, d.$rg)(Fe) ? {} : Fe);
						if (me.search) for (const Le of me.search) be.push(Le);
						if (Array.isArray(me.extensionsEnabledWithPreRelease))
							for (const Le of me.extensionsEnabledWithPreRelease)
								Ce.push(Le.toLowerCase());
					}
					return {
						malicious: ve,
						deprecated: ge,
						search: be,
						extensionsEnabledWithPreRelease: Ce,
					};
				}
			};
			pe = Ne(
				[
					j(1, y.$Aq),
					j(2, b.$ik),
					j(3, h.$Ti),
					j(4, v.$km),
					j(5, f.$ll),
					j(6, l.$Bk),
					j(7, a.$gj),
				],
				pe,
			);
			let $e = class extends pe {
				constructor(fe, me, ve, ge, be, Ce, Le, Fe) {
					super(fe, me, ve, ge, be, Ce, Le, Fe);
				}
			};
			(e.$Rq = $e),
				(e.$Rq = $e =
					Ne(
						[
							j(0, $.$lq),
							j(1, y.$Aq),
							j(2, b.$ik),
							j(3, h.$Ti),
							j(4, v.$km),
							j(5, f.$ll),
							j(6, l.$Bk),
							j(7, a.$gj),
						],
						$e,
					));
			let ye = class extends pe {
				constructor(fe, me, ve, ge, be, Ce, Le) {
					super(void 0, fe, me, ve, ge, be, Ce, Le);
				}
			};
			(e.$Sq = ye),
				(e.$Sq = ye =
					Ne(
						[
							j(0, y.$Aq),
							j(1, b.$ik),
							j(2, h.$Ti),
							j(3, v.$km),
							j(4, f.$ll),
							j(5, l.$Bk),
							j(6, a.$gj),
						],
						ye,
					));
		},
	)
