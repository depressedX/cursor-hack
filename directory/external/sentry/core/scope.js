import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
import './session.js';
import './utils/spanOnScope.js';
define(de[732], he([1, 0, 80, 887, 731]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*session*/,
 w /*spanOnScope*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.Scope = void 0);
			const E = 100;
			class C {
				constructor() {
					(this._notifyingListeners = !1),
						(this._scopeListeners = []),
						(this._eventProcessors = []),
						(this._breadcrumbs = []),
						(this._attachments = []),
						(this._user = {}),
						(this._tags = {}),
						(this._extra = {}),
						(this._contexts = {}),
						(this._sdkProcessingMetadata = {}),
						(this._propagationContext = (0, t.generatePropagationContext)());
				}
				clone() {
					const m = new C();
					return (
						(m._breadcrumbs = [...this._breadcrumbs]),
						(m._tags = { ...this._tags }),
						(m._extra = { ...this._extra }),
						(m._contexts = { ...this._contexts }),
						(m._user = this._user),
						(m._level = this._level),
						(m._session = this._session),
						(m._transactionName = this._transactionName),
						(m._fingerprint = this._fingerprint),
						(m._eventProcessors = [...this._eventProcessors]),
						(m._requestSession = this._requestSession),
						(m._attachments = [...this._attachments]),
						(m._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
						(m._propagationContext = { ...this._propagationContext }),
						(m._client = this._client),
						(m._lastEventId = this._lastEventId),
						(0, w._setSpanForScope)(m, (0, w._getSpanForScope)(this)),
						m
					);
				}
				setClient(m) {
					this._client = m;
				}
				setLastEventId(m) {
					this._lastEventId = m;
				}
				getClient() {
					return this._client;
				}
				lastEventId() {
					return this._lastEventId;
				}
				addScopeListener(m) {
					this._scopeListeners.push(m);
				}
				addEventProcessor(m) {
					return this._eventProcessors.push(m), this;
				}
				setUser(m) {
					return (
						(this._user = m || {
							email: void 0,
							id: void 0,
							ip_address: void 0,
							username: void 0,
						}),
						this._session && (0, i.updateSession)(this._session, { user: m }),
						this._notifyScopeListeners(),
						this
					);
				}
				getUser() {
					return this._user;
				}
				getRequestSession() {
					return this._requestSession;
				}
				setRequestSession(m) {
					return (this._requestSession = m), this;
				}
				setTags(m) {
					return (
						(this._tags = { ...this._tags, ...m }),
						this._notifyScopeListeners(),
						this
					);
				}
				setTag(m, r) {
					return (
						(this._tags = { ...this._tags, [m]: r }),
						this._notifyScopeListeners(),
						this
					);
				}
				setExtras(m) {
					return (
						(this._extra = { ...this._extra, ...m }),
						this._notifyScopeListeners(),
						this
					);
				}
				setExtra(m, r) {
					return (
						(this._extra = { ...this._extra, [m]: r }),
						this._notifyScopeListeners(),
						this
					);
				}
				setFingerprint(m) {
					return (this._fingerprint = m), this._notifyScopeListeners(), this;
				}
				setLevel(m) {
					return (this._level = m), this._notifyScopeListeners(), this;
				}
				setTransactionName(m) {
					return (
						(this._transactionName = m), this._notifyScopeListeners(), this
					);
				}
				setContext(m, r) {
					return (
						r === null ? delete this._contexts[m] : (this._contexts[m] = r),
						this._notifyScopeListeners(),
						this
					);
				}
				setSession(m) {
					return (
						m ? (this._session = m) : delete this._session,
						this._notifyScopeListeners(),
						this
					);
				}
				getSession() {
					return this._session;
				}
				update(m) {
					if (!m) return this;
					const r = typeof m == "function" ? m(this) : m,
						[u, a] =
							r instanceof e.Scope
								? [r.getScopeData(), r.getRequestSession()]
								: (0, t.isPlainObject)(r)
									? [m, m.requestSession]
									: [],
						{
							tags: h,
							extra: c,
							user: n,
							contexts: g,
							level: p,
							fingerprint: o = [],
							propagationContext: f,
						} = u || {};
					return (
						(this._tags = { ...this._tags, ...h }),
						(this._extra = { ...this._extra, ...c }),
						(this._contexts = { ...this._contexts, ...g }),
						n && Object.keys(n).length && (this._user = n),
						p && (this._level = p),
						o.length && (this._fingerprint = o),
						f && (this._propagationContext = f),
						a && (this._requestSession = a),
						this
					);
				}
				clear() {
					return (
						(this._breadcrumbs = []),
						(this._tags = {}),
						(this._extra = {}),
						(this._user = {}),
						(this._contexts = {}),
						(this._level = void 0),
						(this._transactionName = void 0),
						(this._fingerprint = void 0),
						(this._requestSession = void 0),
						(this._session = void 0),
						(0, w._setSpanForScope)(this, void 0),
						(this._attachments = []),
						(this._propagationContext = (0, t.generatePropagationContext)()),
						this._notifyScopeListeners(),
						this
					);
				}
				addBreadcrumb(m, r) {
					const u = typeof r == "number" ? r : E;
					if (u <= 0) return this;
					const a = { timestamp: (0, t.dateTimestampInSeconds)(), ...m },
						h = this._breadcrumbs;
					return (
						h.push(a),
						(this._breadcrumbs = h.length > u ? h.slice(-u) : h),
						this._notifyScopeListeners(),
						this
					);
				}
				getLastBreadcrumb() {
					return this._breadcrumbs[this._breadcrumbs.length - 1];
				}
				clearBreadcrumbs() {
					return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
				}
				addAttachment(m) {
					return this._attachments.push(m), this;
				}
				clearAttachments() {
					return (this._attachments = []), this;
				}
				getScopeData() {
					return {
						breadcrumbs: this._breadcrumbs,
						attachments: this._attachments,
						contexts: this._contexts,
						tags: this._tags,
						extra: this._extra,
						user: this._user,
						level: this._level,
						fingerprint: this._fingerprint || [],
						eventProcessors: this._eventProcessors,
						propagationContext: this._propagationContext,
						sdkProcessingMetadata: this._sdkProcessingMetadata,
						transactionName: this._transactionName,
						span: (0, w._getSpanForScope)(this),
					};
				}
				setSDKProcessingMetadata(m) {
					return (
						(this._sdkProcessingMetadata = {
							...this._sdkProcessingMetadata,
							...m,
						}),
						this
					);
				}
				setPropagationContext(m) {
					return (this._propagationContext = m), this;
				}
				getPropagationContext() {
					return this._propagationContext;
				}
				captureException(m, r) {
					const u = r && r.event_id ? r.event_id : (0, t.uuid4)();
					if (!this._client)
						return (
							t.logger.warn(
								"No client configured on scope - will not capture exception!",
							),
							u
						);
					const a = new Error("Sentry syntheticException");
					return (
						this._client.captureException(
							m,
							{
								originalException: m,
								syntheticException: a,
								...r,
								event_id: u,
							},
							this,
						),
						u
					);
				}
				captureMessage(m, r, u) {
					const a = u && u.event_id ? u.event_id : (0, t.uuid4)();
					if (!this._client)
						return (
							t.logger.warn(
								"No client configured on scope - will not capture message!",
							),
							a
						);
					const h = new Error(m);
					return (
						this._client.captureMessage(
							m,
							r,
							{
								originalException: m,
								syntheticException: h,
								...u,
								event_id: a,
							},
							this,
						),
						a
					);
				}
				captureEvent(m, r) {
					const u = r && r.event_id ? r.event_id : (0, t.uuid4)();
					return this._client
						? (this._client.captureEvent(m, { ...r, event_id: u }, this), u)
						: (t.logger.warn(
								"No client configured on scope - will not capture event!",
							),
							u);
				}
				_notifyScopeListeners() {
					this._notifyingListeners ||
						((this._notifyingListeners = !0),
						this._scopeListeners.forEach((m) => {
							m(this);
						}),
						(this._notifyingListeners = !1));
				}
			}
			e.Scope = C;
		})
