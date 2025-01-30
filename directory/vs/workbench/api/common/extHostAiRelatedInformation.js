import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import './extHostTypes.js';
define(Pe[557], Ne([1, 0, 6, 11]), function (we, t, e, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$8gd = void 0);
			class S {
				constructor(P) {
					(this.a = new Map()),
						(this.b = 0),
						(this.c = P.getProxy(e.$lbb.MainThreadAiRelatedInformation));
				}
				async $provideAiRelatedInformation(P, I, l) {
					if (this.a.size === 0)
						throw new Error("No related information providers registered");
					const n = this.a.get(P);
					if (!n) throw new Error("related information provider not found");
					return (await n.provideRelatedInformation(I, l)) ?? [];
				}
				getRelatedInformation(P, I, l) {
					return this.c.$getAiRelatedInformation(I, l);
				}
				registerRelatedInformationProvider(P, I, l) {
					const n = this.b;
					return (
						this.b++,
						this.a.set(n, l),
						this.c.$registerAiRelatedInformationProvider(n, I),
						new r.$nbb(() => {
							this.c.$unregisterAiRelatedInformationProvider(n),
								this.a.delete(n);
						})
					);
				}
			}
			t.$8gd = S;
		}),
		