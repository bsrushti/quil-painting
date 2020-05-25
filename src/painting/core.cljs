(ns painting.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/background 25)
  (q/frame-rate 30)
  (q/color-mode :hsb)
  {:rects 50}
  )


(defn update-state [state]
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.1)})

(defn draw-rect
  [{:keys [x y width height fill]}]
  ((q/fill [fill 255 225])
   (q/rect x y width height)))

(defn draw-state [rects]
  (doseq [x (range 0 255 10)]
    (q/stroke x 120 255)
    (draw-rect {:x (* x 3) :y 0 :width 250 :height 750 :fill x}))
  (q/fill 255)
  (q/stroke 255)
  (q/ellipse 650 80 80 80)
  (q/ellipse 540 150 30 30)
  (q/ellipse 520 250 50 50)
  (q/ellipse 400 200 100 100)
  (q/ellipse 360 250 80 80)
  (q/ellipse 320 350 60 60)
  (q/ellipse 280 300 30 30)
  (q/ellipse 220 300 60 60)
  (q/ellipse 180 450 30 30)
  (q/ellipse 150 550 30 30)

  (q/stroke 5)
  (q/fill 5)
  (q/begin-shape)
  (q/vertex 60 560)
  (q/vertex 40 650)
  (q/vertex 90 650)
  (q/end-shape)

  ;hairs
  (q/fill 255)
  (q/ellipse 60 570 40 40)
  (q/fill 5)
  (q/stroke 5)
  (q/ellipse 60 550 20 20)
  (q/ellipse 50 555 20 20)
  (q/ellipse 70 555 20 20)

  ;buttons
  (q/fill 255)
  (q/ellipse 62 600 12 12)
  (q/ellipse 62 620 12 12)
  (q/ellipse 62 640 12 12)

  ;legs
  (q/fill 5)
  (q/stroke 5)
  (q/rect 50 650 3 50)
  (q/rect 70 650 3 50)

  ;shoes
  (q/ellipse 45 700 20 15)
  (q/ellipse 75 700 20 15)

  ;hands
  (q/stroke-weight 5)
  (q/line 70 610 110 570)
  (q/line 50 610 20 570)

  ;eyes
  (q/fill 5)
  (q/stroke-weight 3)
  (q/ellipse 54 570 2 2)
  (q/ellipse 66 570 2 2)

  (q/arc 60 578 10 10 120 40)
  )

(defn ^:export run-sketch []
  (q/defsketch painting
               :host "painting"
               :size [750 750]
               :setup setup
               :draw draw-state
               :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
