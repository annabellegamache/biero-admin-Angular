export interface Biere {
    id_biere:Number;
    nom:String;
    brasserie:String;
    description?:String;
    image?:String;
    date_ajout:Date;
    date_modif:Date;
    actif:Boolean;
}
