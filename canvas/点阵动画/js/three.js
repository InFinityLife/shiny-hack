$(function() {
    var o, a, s, l, c, p, E = 100,
    d = 50,
    f = 50,
    i = 0,
    n = 0,
    t = window.innerWidth / 2;
	
	var driver_guidePage = document.getElementById("driver_item");
	console.log(driver_guidePage);
    window.innerHeight;
    function h() {
        t = window.innerWidth / 2,
        window.innerHeight / 2,
        a.aspect = window.innerWidth / window.innerHeight,
        a.updateProjectionMatrix(),
        l.setSize(window.innerWidth, window.innerHeight)
    }
    function u(e) {
        n = e.clientX - t
    } !
    function() {
		
		(o = document.createElement("div")).style.position = "",
        o.style.top = "0px",
        o.style.left = "0px",
        o.style.zIndex = "-1",
        o.style.opacity = "0.5",
        driver_guidePage.appendChild(o),
        (a = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e4)).position.z = 1e3,
        s = new THREE.Scene,
        c = new Array;
        for (var t = 2 * Math.PI,
        e = new THREE.SpriteCanvasMaterial({
            color: 24613050,//波浪颜色
            program: function(e) {
                e.beginPath(),
                e.arc(0, 0, .5, 0, t, !0),
                e.fill()
            }
        }), r = 0, i = 0; i < d; i++) for (var n = 0; n < f; n++)(p = c[r++] = new THREE.Sprite(e)).position.x = i * E - d * E / 2,
        p.position.z = n * E - f * E / 2,
        s.add(p); (l = new THREE.CanvasRenderer({
            alpha: !0
        })).setPixelRatio(window.devicePixelRatio),
        l.setSize(window.innerWidth, window.innerHeight),
        o.appendChild(l.domElement),
        document.addEventListener("mousemove", u, !1),
        window.addEventListener("resize", h, !1)
    } (),
    function e() {
        requestAnimationFrame(e); !
        function() {
            a.position.x += .05 * (n - a.position.x),
            a.position.y = 362.05,
            a.lookAt({
                x: s.position.x,
                y: window.innerHeight / 3,
                z: s.position.z
            });
            for (var e = 0,
            t = 0; t < d; t++) for (var r = 0; r < f; r++)(p = c[e++]).position.y = 50 * Math.sin(.3 * (t + i)) + 50 * Math.sin(.5 * (r + i)),
            p.scale.x = p.scale.y = 4 * (Math.sin(.3 * (t + i)) + 1) + 4 * (Math.sin(.5 * (r + i)) + 1);
            l.render(s, a),
            i += .1
        } ()
    } ()
}),
THREE.SpriteCanvasMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "SpriteCanvasMaterial",
    this.color = new THREE.Color(16777215),
    this.program = function(e, t) {},
    this.setValues(e)
},
THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial,
THREE.SpriteCanvasMaterial.prototype.clone = function() {
    var e = new THREE.SpriteCanvasMaterial;
    return e.copy(this),
    e.color.copy(this.color),
    e.program = this.program,
    e
},
THREE.CanvasRenderer = function(e) {
    console.log("THREE.CanvasRenderer", THREE.REVISION),
    e = e || {};
    var s, l, h, c, p, E, u, m, v, x, R, y, T, w, H, g, S, M, b, C = this,
    d = new THREE.Projector,
    i = void 0 !== e.canvas ? e.canvas: document.createElement("canvas"),
    f = i.width,
    z = i.height,
    V = Math.floor(f / 2),
    j = Math.floor(z / 2),
    L = 0,
    O = 0,
    B = f,
    W = z,
    n = 1,
    P = i.getContext("2d", {
        alpha: !0 === e.alpha
    }),
    r = new THREE.Color(0),
    o = !0 === e.alpha ? 0 : 1,
    a = 1,
    k = 0,
    N = null,
    F = null,
    A = null,
    I = null,
    D = null,
    t = [],
    G = (new THREE.RenderableVertex, new THREE.RenderableVertex, new THREE.Color),
    U = (new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color),
    q = new THREE.Color,
    J = new THREE.Color,
    X = {},
    $ = new THREE.Box2,
    K = new THREE.Box2,
    Q = new THREE.Box2,
    Y = new THREE.Color,
    Z = new THREE.Color,
    _ = new THREE.Color,
    ee = new THREE.Vector3,
    te = new THREE.Vector3,
    re = new THREE.Vector3,
    ie = new THREE.Matrix3;
    function ne(e, t, r) {
        de(r.opacity),
        fe(r.blending);
        var i = t.scale.x * V,
        n = t.scale.y * j,
        o = .5 * Math.sqrt(i * i + n * n);
        if (Q.min.set(e.x - o, e.y - o), Q.max.set(e.x + o, e.y + o), r instanceof THREE.SpriteMaterial) {
            var a = r.map;
            if (null !== a) {
                var s = X[a.id];
                if (void 0 !== s && s.version === a.version || (s = ce(a), X[a.id] = s), void 0 !== s.canvas) {
                    xe(s.canvas);
                    var l = a.image,
                    c = l.width * a.offset.x,
                    p = l.height * a.offset.y,
                    E = l.width * a.repeat.x,
                    d = l.height * a.repeat.y,
                    f = i / E,
                    h = n / d;
                    P.save(),
                    P.translate(e.x, e.y),
                    0 !== r.rotation && P.rotate(r.rotation),
                    P.translate( - i / 2, -n / 2),
                    P.scale(f, h),
                    P.translate( - c, -p),
                    P.fillRect(c, p, E, d),
                    P.restore()
                }
            } else xe(r.color.getStyle()),
            P.save(),
            P.translate(e.x, e.y),
            0 !== r.rotation && P.rotate(r.rotation),
            P.scale(i, -n),
            P.fillRect( - .5, -.5, 1, 1),
            P.restore()
        } else r instanceof THREE.SpriteCanvasMaterial && (ve(r.color.getStyle()), xe(r.color.getStyle()), P.save(), P.translate(e.x, e.y), 0 !== r.rotation && P.rotate(r.rotation), P.scale(i, n), r.program(P), P.restore())
    }
    function oe(e, t, r, i) {
        if (de(i.opacity), fe(i.blending), P.beginPath(), P.moveTo(e.positionScreen.x, e.positionScreen.y), P.lineTo(t.positionScreen.x, t.positionScreen.y), i instanceof THREE.LineBasicMaterial) {
            if (he(i.linewidth), ue(i.linecap), me(i.linejoin), i.vertexColors !== THREE.VertexColors) ve(i.color.getStyle());
            else {
                var n = r.vertexColors[0].getStyle(),
                o = r.vertexColors[1].getStyle();
                if (n === o) ve(n);
                else {
                    try {
                        var a = P.createLinearGradient(e.positionScreen.x, e.positionScreen.y, t.positionScreen.x, t.positionScreen.y);
                        a.addColorStop(0, n),
                        a.addColorStop(1, o)
                    } catch(e) {
                        a = n
                    }
                    ve(a)
                }
            }
            P.stroke(),
            Q.expandByScalar(2 * i.linewidth)
        } else i instanceof THREE.LineDashedMaterial && (he(i.linewidth), ue(i.linecap), me(i.linejoin), ve(i.color.getStyle()), Re([i.dashSize, i.gapSize]), P.stroke(), Q.expandByScalar(2 * i.linewidth), Re([]))
    }
    function ae(e, t, r, i, n, o, a, s) {
        var l, c, p, E, d, f;
        if (C.info.render.vertices += 3, C.info.render.faces++, de(s.opacity), fe(s.blending), u = e.positionScreen.x, m = e.positionScreen.y, v = t.positionScreen.x, x = t.positionScreen.y, R = r.positionScreen.x, y = r.positionScreen.y, l = u, c = m, p = v, E = x, d = R, f = y, P.beginPath(), P.moveTo(l, c), P.lineTo(p, E), P.lineTo(d, f), P.closePath(), (s instanceof THREE.MeshLambertMaterial || s instanceof THREE.MeshPhongMaterial) && null === s.map) U.copy(s.color),
        q.copy(s.emissive),
        s.vertexColors === THREE.FaceColors && U.multiply(a.color),
        G.copy(Y),
        te.copy(e.positionWorld).add(t.positionWorld).add(r.positionWorld).divideScalar(3),
        function(e, t, r) {
            for (var i = 0,
            n = h.length; i < n; i++) {
                var o = h[i];
                if (J.copy(o.color), o instanceof THREE.DirectionalLight) {
                    var a = ee.setFromMatrixPosition(o.matrixWorld).normalize();
                    if ((s = t.dot(a)) <= 0) continue;
                    s *= o.intensity,
                    r.add(J.multiplyScalar(s))
                } else if (o instanceof THREE.PointLight) {
                    var s;
                    if (a = ee.setFromMatrixPosition(o.matrixWorld), (s = t.dot(ee.subVectors(a, e).normalize())) <= 0) continue;
                    if (0 == (s *= 0 == o.distance ? 1 : 1 - Math.min(e.distanceTo(a) / o.distance, 1))) continue;
                    s *= o.intensity,
                    r.add(J.multiplyScalar(s))
                }
            }
        } (te, a.normalModel, G),
        G.multiply(U).add(q),
        !0 === s.wireframe ? se(G, s.wireframeLinewidth, s.wireframeLinecap, s.wireframeLinejoin) : le(G);
        else if (s instanceof THREE.MeshBasicMaterial || s instanceof THREE.MeshLambertMaterial || s instanceof THREE.MeshPhongMaterial) {
            if (null !== s.map) s.map.mapping === THREE.UVMapping && (T = a.uvs, pe(u, m, v, x, R, y, T[i].x, T[i].y, T[n].x, T[n].y, T[o].x, T[o].y, s.map));
            else null !== s.envMap ? s.envMap.mapping === THREE.SphericalReflectionMapping && (re.copy(a.vertexNormalsModel[i]).applyMatrix3(ie), w = .5 * re.x + .5, H = .5 * re.y + .5, re.copy(a.vertexNormalsModel[n]).applyMatrix3(ie), g = .5 * re.x + .5, S = .5 * re.y + .5, re.copy(a.vertexNormalsModel[o]).applyMatrix3(ie), M = .5 * re.x + .5, b = .5 * re.y + .5, pe(u, m, v, x, R, y, w, H, g, S, M, b, s.envMap)) : (G.copy(s.color), s.vertexColors === THREE.FaceColors && G.multiply(a.color), !0 === s.wireframe ? se(G, s.wireframeLinewidth, s.wireframeLinecap, s.wireframeLinejoin) : le(G))
        } else s instanceof THREE.MeshNormalMaterial ? (re.copy(a.normalModel).applyMatrix3(ie), G.setRGB(re.x, re.y, re.z).multiplyScalar(.5).addScalar(.5)) : G.setRGB(1, 1, 1),
        !0 === s.wireframe ? se(G, s.wireframeLinewidth, s.wireframeLinecap, s.wireframeLinejoin) : le(G)
    }
    function se(e, t, r, i) {
        he(t),
        ue(r),
        me(i),
        ve(e.getStyle()),
        P.stroke(),
        Q.expandByScalar(2 * t)
    }
    function le(e) {
        xe(e.getStyle()),
        P.fill()
    }
    function ce(e) {
        if (0 === e.version || e instanceof THREE.CompressedTexture || e instanceof THREE.DataTexture) return {
            canvas: void 0,
            version: e.version
        };
        var t = e.image;
        if (!1 === t.complete) return {
            canvas: void 0,
            version: 0
        };
        var r = e.wrapS === THREE.RepeatWrapping || e.wrapS === THREE.MirroredRepeatWrapping,
        i = e.wrapT === THREE.RepeatWrapping || e.wrapT === THREE.MirroredRepeatWrapping,
        n = e.wrapS === THREE.MirroredRepeatWrapping,
        o = e.wrapT === THREE.MirroredRepeatWrapping,
        a = document.createElement("canvas");
        a.width = t.width * (n ? 2 : 1),
        a.height = t.height * (o ? 2 : 1);
        var s = a.getContext("2d");
        s.setTransform(1, 0, 0, -1, 0, t.height),
        s.drawImage(t, 0, 0),
        !0 === n && (s.setTransform( - 1, 0, 0, -1, t.width, t.height), s.drawImage(t, -t.width, 0)),
        !0 === o && (s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(t, 0, t.height)),
        !0 === n && !0 === o && (s.setTransform( - 1, 0, 0, 1, t.width, 0), s.drawImage(t, -t.width, t.height));
        var l = "no-repeat"; ! 0 === r && !0 === i ? l = "repeat": !0 === r ? l = "repeat-x": !0 === i && (l = "repeat-y");
        var c = P.createPattern(a, l);
        return e.onUpdate && e.onUpdate(e),
        {
            canvas: c,
            version: e.version
        }
    }
    function pe(e, t, r, i, n, o, a, s, l, c, p, E, d) {
        var f = X[d.id];
        if (void 0 !== f && f.version === d.version || (f = ce(d), X[d.id] = f), void 0 === f.canvas) return xe("rgba( 0, 0, 0, 1)"),
        void P.fill();
        xe(f.canvas);
        var h, u, m, v, x, R, y, T, w = d.offset.x / d.repeat.x,
        H = d.offset.y / d.repeat.y,
        g = d.image.width * d.repeat.x,
        S = d.image.height * d.repeat.y;
        l = (l + w) * g,
        c = (c + H) * S,
        p = (p + w) * g,
        E = (E + H) * S,
        r -= e,
        i -= t,
        n -= e,
        o -= t,
        0 !== (y = (l -= a = (a + w) * g) * (E -= s = (s + H) * S) - (p -= a) * (c -= s)) && (x = e - (h = (E * r - c * n) * (T = 1 / y)) * a - (m = (l * n - p * r) * T) * s, R = t - (u = (E * i - c * o) * T) * a - (v = (l * o - p * i) * T) * s, P.save(), P.transform(h, u, m, v, x, R), P.fill(), P.restore())
    }
    function Ee(e, t, r) {
        var i, n = t.x - e.x,
        o = t.y - e.y,
        a = n * n + o * o;
        0 !== a && (n *= i = r / Math.sqrt(a), o *= i, t.x += n, t.y += o, e.x -= n, e.y -= o)
    }
    function de(e) {
        a !== e && (P.globalAlpha = e, a = e)
    }
    function fe(e) {
        k !== e && (e === THREE.NormalBlending ? P.globalCompositeOperation = "source-over": e === THREE.AdditiveBlending ? P.globalCompositeOperation = "lighter": e === THREE.SubtractiveBlending ? P.globalCompositeOperation = "darker": e === THREE.MultiplyBlending && (P.globalCompositeOperation = "multiply"), k = e)
    }
    function he(e) {
        A !== e && (P.lineWidth = e, A = e)
    }
    function ue(e) {
        I !== e && (P.lineCap = e, I = e)
    }
    function me(e) {
        D !== e && (P.lineJoin = e, D = e)
    }
    function ve(e) {
        N !== e && (P.strokeStyle = e, N = e)
    }
    function xe(e) {
        F !== e && (P.fillStyle = e, F = e)
    }
    function Re(e) {
        t.length !== e.length && (P.setLineDash(e), t = e)
    }
    void 0 === P.setLineDash && (P.setLineDash = function() {}),
    this.domElement = i,
    this.autoClear = !0,
    this.sortObjects = !0,
    this.sortElements = !0,
    this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    },
    this.supportsVertexTextures = function() {},
    this.setFaceCulling = function() {},
    this.getContext = function() {
        return P
    },
    this.getContextAttributes = function() {
        return P.getContextAttributes()
    },
    this.getPixelRatio = function() {
        return n
    },
    this.setPixelRatio = function(e) {
        void 0 !== e && (n = e)
    },
    this.setSize = function(e, t, r) {
        f = e * n,
        z = t * n,
        i.width = f,
        i.height = z,
        V = Math.floor(f / 2),
        j = Math.floor(z / 2),
        !1 !== r && (i.style.width = e + "px", i.style.height = t + "px"),
        $.min.set( - V, -j),
        $.max.set(V, j),
        K.min.set( - V, -j),
        K.max.set(V, j),
        a = 1,
        k = 0,
        D = I = A = F = N = null,
        this.setViewport(0, 0, e, t)
    },
    this.setViewport = function(e, t, r, i) {
        L = e * n,
        O = t * n,
        B = r * n,
        W = i * n
    },
    this.setScissor = function() {},
    this.setScissorTest = function() {},
    this.setClearColor = function(e, t) {
        r.set(e),
        o = void 0 !== t ? t: 1,
        K.min.set( - V, -j),
        K.max.set(V, j)
    },
    this.setClearColorHex = function(e, t) {
        console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."),
        this.setClearColor(e, t)
    },
    this.getClearColor = function() {
        return r
    },
    this.getClearAlpha = function() {
        return o
    },
    this.getMaxAnisotropy = function() {
        return 0
    },
    this.clear = function() { ! 1 === K.isEmpty() && (K.intersect($), K.expandByScalar(2), K.min.x = K.min.x + V, K.min.y = -K.min.y + j, K.max.x = K.max.x + V, K.max.y = -K.max.y + j, o < 1 && P.clearRect(0 | K.min.x, 0 | K.max.y, K.max.x - K.min.x | 0, K.min.y - K.max.y | 0), 0 < o && (fe(THREE.NormalBlending), de(1), xe("rgba(" + Math.floor(255 * r.r) + "," + Math.floor(255 * r.g) + "," + Math.floor(255 * r.b) + "," + o + ")"), P.fillRect(0 | K.min.x, 0 | K.max.y, K.max.x - K.min.x | 0, K.min.y - K.max.y | 0)), K.makeEmpty())
    },
    this.clearColor = function() {},
    this.clearDepth = function() {},
    this.clearStencil = function() {},
    this.render = function(e, t) {
        if (t instanceof THREE.Camera != !1) {
            var r = e.background;
            r && r.isColor ? (xe("rgb(" + Math.floor(255 * r.r) + "," + Math.floor(255 * r.g) + "," + Math.floor(255 * r.b) + ")"), P.fillRect(0, 0, f, z)) : !0 === this.autoClear && this.clear(),
            C.info.render.vertices = 0,
            C.info.render.faces = 0,
            P.setTransform(B / f, 0, 0, -W / z, L, z - O),
            P.translate(V, j),
            s = d.projectScene(e, t, this.sortObjects, this.sortElements),
            l = s.elements,
            h = s.lights,
            t,
            ie.getNormalMatrix(t.matrixWorldInverse),
            function() {
                Y.setRGB(0, 0, 0),
                Z.setRGB(0, 0, 0),
                _.setRGB(0, 0, 0);
                for (var e = 0,
                t = h.length; e < t; e++) {
                    var r = h[e],
                    i = r.color;
                    r instanceof THREE.AmbientLight ? Y.add(i) : r instanceof THREE.DirectionalLight ? Z.add(i) : r instanceof THREE.PointLight && _.add(i)
                }
            } ();
            for (var i = 0,
            n = l.length; i < n; i++) {
                var o = l[i],
                a = o.material;
                if (void 0 !== a && 0 !== a.opacity) {
                    if (Q.makeEmpty(), o instanceof THREE.RenderableSprite)(c = o).x *= V,
                    c.y *= j,
                    ne(c, o, a);
                    else if (o instanceof THREE.RenderableLine) c = o.v1,
                    p = o.v2,
                    c.positionScreen.x *= V,
                    c.positionScreen.y *= j,
                    p.positionScreen.x *= V,
                    p.positionScreen.y *= j,
                    Q.setFromPoints([c.positionScreen, p.positionScreen]),
                    !0 === $.intersectsBox(Q) && oe(c, p, o, a);
                    else if (o instanceof THREE.RenderableFace) {
                        if (c = o.v1, p = o.v2, E = o.v3, c.positionScreen.z < -1 || 1 < c.positionScreen.z) continue;
                        if (p.positionScreen.z < -1 || 1 < p.positionScreen.z) continue;
                        if (E.positionScreen.z < -1 || 1 < E.positionScreen.z) continue;
                        c.positionScreen.x *= V,
                        c.positionScreen.y *= j,
                        p.positionScreen.x *= V,
                        p.positionScreen.y *= j,
                        E.positionScreen.x *= V,
                        E.positionScreen.y *= j,
                        0 < a.overdraw && (Ee(c.positionScreen, p.positionScreen, a.overdraw), Ee(p.positionScreen, E.positionScreen, a.overdraw), Ee(E.positionScreen, c.positionScreen, a.overdraw)),
                        Q.setFromPoints([c.positionScreen, p.positionScreen, E.positionScreen]),
                        !0 === $.intersectsBox(Q) && ae(c, p, E, 0, 1, 2, o, a)
                    }
                    K.union(Q)
                }
            }
            P.setTransform(1, 0, 0, 1, 0, 0)
        } else console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.")
    }
},
THREE.RenderableObject = function() {
    this.id = 0,
    this.object = null,
    this.z = 0,
    this.renderOrder = 0
},
THREE.RenderableFace = function() {
    this.id = 0,
    this.v1 = new THREE.RenderableVertex,
    this.v2 = new THREE.RenderableVertex,
    this.v3 = new THREE.RenderableVertex,
    this.normalModel = new THREE.Vector3,
    this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3],
    this.vertexNormalsLength = 0,
    this.color = new THREE.Color,
    this.material = null,
    this.uvs = [new THREE.Vector2, new THREE.Vector2, new THREE.Vector2],
    this.z = 0,
    this.renderOrder = 0
},
THREE.RenderableVertex = function() {
    this.position = new THREE.Vector3,
    this.positionWorld = new THREE.Vector3,
    this.positionScreen = new THREE.Vector4,
    this.visible = !0
},
THREE.RenderableVertex.prototype.copy = function(e) {
    this.positionWorld.copy(e.positionWorld),
    this.positionScreen.copy(e.positionScreen)
},
THREE.RenderableLine = function() {
    this.id = 0,
    this.v1 = new THREE.RenderableVertex,
    this.v2 = new THREE.RenderableVertex,
    this.vertexColors = [new THREE.Color, new THREE.Color],
    this.material = null,
    this.z = 0,
    this.renderOrder = 0
},
THREE.RenderableSprite = function() {
    this.id = 0,
    this.object = null,
    this.x = 0,
    this.y = 0,
    this.z = 0,
    this.rotation = 0,
    this.scale = new THREE.Vector2,
    this.material = null,
    this.renderOrder = 0
},
THREE.Projector = function() {
    var Q, Y, n, Z, _, ee, te, re, ie, ne, oe, ae = [],
    se = 0,
    le = [],
    t = 0,
    r = [],
    i = 0,
    o = [],
    a = 0,
    s = [],
    l = 0,
    ce = {
        objects: [],
        lights: [],
        elements: []
    },
    pe = new THREE.Vector3,
    Ee = new THREE.Vector4,
    u = new THREE.Box3(new THREE.Vector3( - 1, -1, -1), new THREE.Vector3(1, 1, 1)),
    m = new THREE.Box3,
    v = new Array(3),
    de = (new Array(4), new THREE.Matrix4),
    fe = new THREE.Matrix4,
    he = new THREE.Matrix4,
    ue = new THREE.Matrix3,
    me = new THREE.Frustum,
    ve = new THREE.Vector4,
    xe = new THREE.Vector4;
    this.projectVector = function(e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."),
        e.project(t)
    },
    this.unprojectVector = function(e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
        e.unproject(t)
    },
    this.pickingRay = function(e, t) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    };
    var Re = new
    function() {
        var l = [],
        c = [],
        p = null,
        E = null,
        d = new THREE.Matrix3;
        function i(e) {
            var t = e.position,
            r = e.positionWorld,
            i = e.positionScreen;
            r.copy(t).applyMatrix4(oe),
            i.copy(r).applyMatrix4(fe);
            var n = 1 / i.w;
            i.x *= n,
            i.y *= n,
            i.z *= n,
            e.visible = -1 <= i.x && i.x <= 1 && -1 <= i.y && i.y <= 1 && -1 <= i.z && i.z <= 1
        }
        function f(e, t, r) {
            return ! 0 === e.visible || !0 === t.visible || !0 === r.visible || (v[0] = e.positionScreen, v[1] = t.positionScreen, v[2] = r.positionScreen, u.intersectsBox(m.setFromPoints(v)))
        }
        function h(e, t, r) {
            return (r.positionScreen.x - e.positionScreen.x) * (t.positionScreen.y - e.positionScreen.y) - (r.positionScreen.y - e.positionScreen.y) * (t.positionScreen.x - e.positionScreen.x) < 0
        }
        return {
            setObject: function(e) {
                E = (p = e).material,
                d.getNormalMatrix(p.matrixWorld),
                l.length = 0,
                c.length = 0
            },
            projectVertex: i,
            checkTriangleVisibility: f,
            checkBackfaceCulling: h,
            pushVertex: function(e, t, r) { (n = ye()).position.set(e, t, r),
                i(n)
            },
            pushNormal: function(e, t, r) {
                l.push(e, t, r)
            },
            pushUv: function(e, t) {
                c.push(e, t)
            },
            pushLine: function(e, t) {
                var r = le[e],
                i = le[t]; (te = we()).id = p.id,
                te.v1.copy(r),
                te.v2.copy(i),
                te.z = (r.positionScreen.z + i.positionScreen.z) / 2,
                te.renderOrder = p.renderOrder,
                te.material = p.material,
                ce.elements.push(te)
            },
            pushTriangle: function(e, t, r) {
                var i = le[e],
                n = le[t],
                o = le[r];
                if (!1 !== f(i, n, o) && (E.side === THREE.DoubleSide || !0 === h(i, n, o))) { (_ = Te()).id = p.id,
                    _.v1.copy(i),
                    _.v2.copy(n),
                    _.v3.copy(o),
                    _.z = (i.positionScreen.z + n.positionScreen.z + o.positionScreen.z) / 3,
                    _.renderOrder = p.renderOrder,
                    _.normalModel.fromArray(l, 3 * e),
                    _.normalModel.applyMatrix3(d).normalize();
                    for (var a = 0; a < 3; a++) {
                        var s = _.vertexNormalsModel[a];
                        s.fromArray(l, 3 * arguments[a]),
                        s.applyMatrix3(d).normalize(),
                        _.uvs[a].fromArray(c, 2 * arguments[a])
                    }
                    _.vertexNormalsLength = 3,
                    _.material = p.material,
                    ce.elements.push(_)
                }
            }
        }
    };
    function ye() {
        if (Z === t) {
            var e = new THREE.RenderableVertex;
            return le.push(e),
            t++,
            Z++,
            e
        }
        return le[Z++]
    }
    function Te() {
        if (ee === i) {
            var e = new THREE.RenderableFace;
            return r.push(e),
            i++,
            ee++,
            e
        }
        return r[ee++]
    }
    function we() {
        if (re === a) {
            var e = new THREE.RenderableLine;
            return o.push(e),
            a++,
            re++,
            e
        }
        return o[re++]
    }
    function He() {
        if (ne === l) {
            var e = new THREE.RenderableSprite;
            return s.push(e),
            l++,
            ne++,
            e
        }
        return s[ne++]
    }
    function ge(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder: e.z !== t.z ? t.z - e.z: e.id !== t.id ? e.id - t.id: 0
    }
    function Se(e, t) {
        var r = 0,
        i = 1,
        n = e.z + e.w,
        o = t.z + t.w,
        a = -e.z + e.w,
        s = -t.z + t.w;
        return 0 <= n && 0 <= o && 0 <= a && 0 <= s || !(n < 0 && o < 0 || a < 0 && s < 0) && (n < 0 ? r = Math.max(r, n / (n - o)) : o < 0 && (i = Math.min(i, n / (n - o))), a < 0 ? r = Math.max(r, a / (a - s)) : s < 0 && (i = Math.min(i, a / (a - s))), !(i < r) && (e.lerp(t, r), t.lerp(e, 1 - i), !0))
    }
    this.projectScene = function(e, t, r, i) {
        function n(e) { (Q = function() {
                if (Y === se) {
                    var e = new THREE.RenderableObject;
                    return ae.push(e),
                    se++,
                    Y++,
                    e
                }
                return ae[Y++]
            } ()).id = e.id,
            Q.object = e,
            pe.setFromMatrixPosition(e.matrixWorld),
            pe.applyMatrix4(fe),
            Q.z = pe.z,
            Q.renderOrder = e.renderOrder,
            ce.objects.push(Q)
        }
        ne = re = ee = 0,
        !(ce.elements.length = 0) === e.autoUpdate && e.updateMatrixWorld(),
        null === t.parent && t.updateMatrixWorld(),
        de.copy(t.matrixWorldInverse.getInverse(t.matrixWorld)),
        fe.multiplyMatrices(t.projectionMatrix, de),
        me.setFromMatrix(fe),
        Y = 0,
        ce.objects.length = 0,
        ce.lights.length = 0,
        e.traverseVisible(function(e) {
            if (e instanceof THREE.Light) ce.lights.push(e);
            else if (e instanceof THREE.Mesh || e instanceof THREE.Line) {
                if (!1 === e.material.visible) return;
                if (!0 === e.frustumCulled && !1 === me.intersectsObject(e)) return;
                n(e)
            } else if (e instanceof THREE.Sprite) {
                if (!1 === e.material.visible) return;
                if (!0 === e.frustumCulled && !1 === me.intersectsSprite(e)) return;
                n(e)
            }
        }),
        !0 === r && ce.objects.sort(ge);
        for (var o = 0,
        a = ce.objects.length; o < a; o++) {
            var s = ce.objects[o].object,
            l = s.geometry;
            if (Re.setObject(s), oe = s.matrixWorld, Z = 0, s instanceof THREE.Mesh) {
                if (l instanceof THREE.BufferGeometry) {
                    var c = l.attributes,
                    p = l.groups;
                    if (void 0 === c.position) continue;
                    for (var E = 0,
                    d = (X = c.position.array).length; E < d; E += 3) Re.pushVertex(X[E], X[E + 1], X[E + 2]);
                    if (void 0 !== c.normal) {
                        var f = c.normal.array;
                        for (E = 0, d = f.length; E < d; E += 3) Re.pushNormal(f[E], f[E + 1], f[E + 2])
                    }
                    if (void 0 !== c.uv) {
                        var h = c.uv.array;
                        for (E = 0, d = h.length; E < d; E += 2) Re.pushUv(h[E], h[E + 1])
                    }
                    if (null !== l.index) {
                        var u = l.index.array;
                        if (0 < p.length) for (var m = 0; m < p.length; m++) {
                            var v = p[m];
                            for (E = v.start, d = v.start + v.count; E < d; E += 3) Re.pushTriangle(u[E], u[E + 1], u[E + 2])
                        } else for (E = 0, d = u.length; E < d; E += 3) Re.pushTriangle(u[E], u[E + 1], u[E + 2])
                    } else for (E = 0, d = X.length / 3; E < d; E += 3) Re.pushTriangle(E, E + 1, E + 2)
                } else if (l instanceof THREE.Geometry) {
                    var x = l.vertices,
                    R = l.faces,
                    y = l.faceVertexUvs[0];
                    ue.getNormalMatrix(oe);
                    for (var T = s.material,
                    w = T instanceof THREE.MultiMaterial,
                    H = !0 === w ? s.material: null, g = 0, S = x.length; g < S; g++) {
                        var M = x[g];
                        if (pe.copy(M), !0 === T.morphTargets) for (var b = l.morphTargets,
                        C = s.morphTargetInfluences,
                        z = 0,
                        V = b.length; z < V; z++) {
                            var j = C[z];
                            if (0 !== j) {
                                var L = b[z].vertices[g];
                                pe.x += (L.x - M.x) * j,
                                pe.y += (L.y - M.y) * j,
                                pe.z += (L.z - M.z) * j
                            }
                        }
                        Re.pushVertex(pe.x, pe.y, pe.z)
                    }
                    for (var O = 0,
                    B = R.length; O < B; O++) {
                        var W = R[O];
                        if (void 0 !== (T = !0 === w ? H.materials[W.materialIndex] : s.material)) {
                            var P = T.side,
                            k = le[W.a],
                            N = le[W.b],
                            F = le[W.c];
                            if (!1 !== Re.checkTriangleVisibility(k, N, F)) {
                                var A = Re.checkBackfaceCulling(k, N, F);
                                if (P !== THREE.DoubleSide) {
                                    if (P === THREE.FrontSide && !1 === A) continue;
                                    if (P === THREE.BackSide && !0 === A) continue
                                } (_ = Te()).id = s.id,
                                _.v1.copy(k),
                                _.v2.copy(N),
                                _.v3.copy(F),
                                _.normalModel.copy(W.normal),
                                !1 !== A || P !== THREE.BackSide && P !== THREE.DoubleSide || _.normalModel.negate(),
                                _.normalModel.applyMatrix3(ue).normalize();
                                for (var I = W.vertexNormals,
                                D = 0,
                                G = Math.min(I.length, 3); D < G; D++) {
                                    var U = _.vertexNormalsModel[D];
                                    U.copy(I[D]),
                                    !1 !== A || P !== THREE.BackSide && P !== THREE.DoubleSide || U.negate(),
                                    U.applyMatrix3(ue).normalize()
                                }
                                _.vertexNormalsLength = I.length;
                                var q = y[O];
                                if (void 0 !== q) for (var J = 0; J < 3; J++) _.uvs[J].copy(q[J]);
                                _.color = W.color,
                                _.material = T,
                                _.z = (k.positionScreen.z + N.positionScreen.z + F.positionScreen.z) / 3,
                                _.renderOrder = s.renderOrder,
                                ce.elements.push(_)
                            }
                        }
                    }
                }
            } else if (s instanceof THREE.Line) {
                if (l instanceof THREE.BufferGeometry) {
                    if (void 0 !== (c = l.attributes).position) {
                        var X;
                        for (E = 0, d = (X = c.position.array).length; E < d; E += 3) Re.pushVertex(X[E], X[E + 1], X[E + 2]);
                        if (null !== l.index) for (E = 0, d = (u = l.index.array).length; E < d; E += 2) Re.pushLine(u[E], u[E + 1]);
                        else {
                            var $ = s instanceof THREE.LineSegments ? 2 : 1;
                            for (E = 0, d = X.length / 3 - 1; E < d; E += $) Re.pushLine(E, E + 1)
                        }
                    }
                } else if (l instanceof THREE.Geometry) {
                    if (he.multiplyMatrices(fe, oe), 0 === (x = s.geometry.vertices).length) continue; (k = ye()).positionScreen.copy(x[0]).applyMatrix4(he);
                    for ($ = s instanceof THREE.LineSegments ? 2 : 1, g = 1, S = x.length; g < S; g++)(k = ye()).positionScreen.copy(x[g]).applyMatrix4(he),
                    0 < (g + 1) % $ || (N = le[Z - 2], ve.copy(k.positionScreen), xe.copy(N.positionScreen), !0 === Se(ve, xe) && (ve.multiplyScalar(1 / ve.w), xe.multiplyScalar(1 / xe.w), (te = we()).id = s.id, te.v1.positionScreen.copy(ve), te.v2.positionScreen.copy(xe), te.z = Math.max(ve.z, xe.z), te.renderOrder = s.renderOrder, te.material = s.material, s.material.vertexColors === THREE.VertexColors && (te.vertexColors[0].copy(s.geometry.colors[g]), te.vertexColors[1].copy(s.geometry.colors[g - 1])), ce.elements.push(te)))
                }
            } else if (s instanceof THREE.Sprite) {
                Ee.set(oe.elements[12], oe.elements[13], oe.elements[14], 1),
                Ee.applyMatrix4(fe);
                var K = 1 / Ee.w;
                Ee.z *= K,
                -1 <= Ee.z && Ee.z <= 1 && ((ie = He()).id = s.id, ie.x = Ee.x * K, ie.y = Ee.y * K, ie.z = Ee.z, ie.renderOrder = s.renderOrder, ie.object = s, ie.rotation = s.rotation, ie.scale.x = s.scale.x * Math.abs(ie.x - (Ee.x + t.projectionMatrix.elements[0]) / (Ee.w + t.projectionMatrix.elements[12])), ie.scale.y = s.scale.y * Math.abs(ie.y - (Ee.y + t.projectionMatrix.elements[5]) / (Ee.w + t.projectionMatrix.elements[13])), ie.material = s.material, ce.elements.push(ie))
            }
        }
        return ! 0 === i && ce.elements.sort(ge),
        ce
    }
};