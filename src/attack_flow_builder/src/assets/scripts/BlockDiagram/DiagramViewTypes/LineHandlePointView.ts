import { RasterCache } from "../Diagram/RasterCache";
import { ViewportRegion } from "../Diagram";
import { LineHandlePointModel } from "../DiagramModelTypes";
import { DiagramLineHandleView } from "./BaseTypes/BaseViews";

export class LineHandlePointView extends DiagramLineHandleView {
    
    /**
     * The underlying model.
     */
    public override el: LineHandlePointModel;


    /**
     * Creates a new {@link LineHandlePointView}.
     * @param el
     *  The underlying model.
     * @param rasterCache
     *  The view's raster cache.
     */
    constructor(el: LineHandlePointModel, rasterCache: RasterCache) {
        super(el, rasterCache);
        this.el = el;
    }


    ///////////////////////////////////////////////////////////////////////////
    //  1. Render  ////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    
    
    /**
     * Renders the object to a context.
     * @param ctx
     *  The context to render to.
     * @param vr
     *  The context's viewport.
     * @param dsx
     *  The drop shadow's x-offset.
     *  (Default: 0)
     * @param dsy
     *  The drop shadow's y-offset.
     *  (Default: 0)
     * @param attrs
     *  If specified, these attributes will override the object's underlying
     *  attributes.
     */
    public override renderTo(
        ctx: CanvasRenderingContext2D, vr: ViewportRegion,
        dsx: number = 0, dsy: number = 0, attrs?: number
    ) { 
        
        // Init
        let { 
            radius,
            fill_color,
            stroke_color,
            stroke_width
        } = this.el.style;
        
        // Configure canvas
        ctx.fillStyle = fill_color;
        ctx.lineWidth = stroke_width;
        ctx.strokeStyle = stroke_color;

        // Stroke width offset
        let wo = stroke_width % 2 ? 0.5 : 0;

        // Draw handle
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius + wo, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    
    }

}