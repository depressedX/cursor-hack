define(de[194], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Rhb = void 0),
				(e.$Shb = w);
			class t {
				constructor(C) {
					(this.domNode = C),
						(this.a = ""),
						(this.b = ""),
						(this.c = ""),
						(this.d = ""),
						(this.e = ""),
						(this.f = ""),
						(this.g = ""),
						(this.h = ""),
						(this.i = ""),
						(this.j = ""),
						(this.k = ""),
						(this.l = ""),
						(this.m = ""),
						(this.n = ""),
						(this.o = ""),
						(this.p = ""),
						(this.q = ""),
						(this.r = ""),
						(this.s = ""),
						(this.t = ""),
						(this.u = ""),
						(this.v = ""),
						(this.w = ""),
						(this.x = ""),
						(this.y = ""),
						(this.z = ""),
						(this.A = !1),
						(this.B = "none"),
						(this.C = "");
				}
				setMaxWidth(C) {
					const d = i(C);
					this.a !== d &&
						((this.a = d), (this.domNode.style.maxWidth = this.a));
				}
				setWidth(C) {
					const d = i(C);
					this.b !== d && ((this.b = d), (this.domNode.style.width = this.b));
				}
				setHeight(C) {
					const d = i(C);
					this.c !== d && ((this.c = d), (this.domNode.style.height = this.c));
				}
				setTop(C) {
					const d = i(C);
					this.d !== d && ((this.d = d), (this.domNode.style.top = this.d));
				}
				setLeft(C) {
					const d = i(C);
					this.e !== d && ((this.e = d), (this.domNode.style.left = this.e));
				}
				setBottom(C) {
					const d = i(C);
					this.f !== d && ((this.f = d), (this.domNode.style.bottom = this.f));
				}
				setRight(C) {
					const d = i(C);
					this.g !== d && ((this.g = d), (this.domNode.style.right = this.g));
				}
				setPaddingTop(C) {
					const d = i(C);
					this.h !== d &&
						((this.h = d), (this.domNode.style.paddingTop = this.h));
				}
				setPaddingLeft(C) {
					const d = i(C);
					this.i !== d &&
						((this.i = d), (this.domNode.style.paddingLeft = this.i));
				}
				setPaddingBottom(C) {
					const d = i(C);
					this.j !== d &&
						((this.j = d), (this.domNode.style.paddingBottom = this.j));
				}
				setPaddingRight(C) {
					const d = i(C);
					this.k !== d &&
						((this.k = d), (this.domNode.style.paddingRight = this.k));
				}
				setFontFamily(C) {
					this.l !== C &&
						((this.l = C), (this.domNode.style.fontFamily = this.l));
				}
				setFontWeight(C) {
					this.m !== C &&
						((this.m = C), (this.domNode.style.fontWeight = this.m));
				}
				setFontSize(C) {
					const d = i(C);
					this.n !== d &&
						((this.n = d), (this.domNode.style.fontSize = this.n));
				}
				setFontStyle(C) {
					this.o !== C &&
						((this.o = C), (this.domNode.style.fontStyle = this.o));
				}
				setFontFeatureSettings(C) {
					this.p !== C &&
						((this.p = C), (this.domNode.style.fontFeatureSettings = this.p));
				}
				setFontVariationSettings(C) {
					this.q !== C &&
						((this.q = C), (this.domNode.style.fontVariationSettings = this.q));
				}
				setTextDecoration(C) {
					this.r !== C &&
						((this.r = C), (this.domNode.style.textDecoration = this.r));
				}
				setLineHeight(C) {
					const d = i(C);
					this.s !== d &&
						((this.s = d), (this.domNode.style.lineHeight = this.s));
				}
				setLetterSpacing(C) {
					const d = i(C);
					this.t !== d &&
						((this.t = d), (this.domNode.style.letterSpacing = this.t));
				}
				setClassName(C) {
					this.u !== C && ((this.u = C), (this.domNode.className = this.u));
				}
				toggleClassName(C, d) {
					this.domNode.classList.toggle(C, d),
						(this.u = this.domNode.className);
				}
				setDisplay(C) {
					this.v !== C && ((this.v = C), (this.domNode.style.display = this.v));
				}
				setPosition(C) {
					this.w !== C &&
						((this.w = C), (this.domNode.style.position = this.w));
				}
				setVisibility(C) {
					this.x !== C &&
						((this.x = C), (this.domNode.style.visibility = this.x));
				}
				setColor(C) {
					this.y !== C && ((this.y = C), (this.domNode.style.color = this.y));
				}
				setBackgroundColor(C) {
					this.z !== C &&
						((this.z = C), (this.domNode.style.backgroundColor = this.z));
				}
				setLayerHinting(C) {
					this.A !== C &&
						((this.A = C),
						(this.domNode.style.transform = this.A
							? "translate3d(0px, 0px, 0px)"
							: ""));
				}
				setBoxShadow(C) {
					this.C !== C && ((this.C = C), (this.domNode.style.boxShadow = C));
				}
				setContain(C) {
					this.B !== C && ((this.B = C), (this.domNode.style.contain = this.B));
				}
				setAttribute(C, d) {
					this.domNode.setAttribute(C, d);
				}
				removeAttribute(C) {
					this.domNode.removeAttribute(C);
				}
				appendChild(C) {
					this.domNode.appendChild(C.domNode);
				}
				removeChild(C) {
					this.domNode.removeChild(C.domNode);
				}
			}
			e.$Rhb = t;
			function i(E) {
				return typeof E == "number" ? `${E}px` : E;
			}
			function w(E) {
				return new t(E);
			}
		}),
		