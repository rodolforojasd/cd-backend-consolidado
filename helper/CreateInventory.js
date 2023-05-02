function createInventory(pm){
    
    pm.loadProducts()
    if(pm.products.length === 0){
        pm.addProduct('Decantador','Decantador 1 lt cristal de Bohemia',null,8600,30,'varios','./assets/imgs/varios/DECANTADOR-DE-VIDRIO-1500ML-MERCADO-LIBRE-1.png','local')
        pm.addProduct('Cabaña Piedras Blancas Provoleta de Cabra', 'Queso tupo artesanal 80gr',null, 1200,20, 'comida', './assets/imgs/comida/261378-800-auto.webp','local')  
        // pm.addProduct('Ciney','Cerveza Belga Blonde alc.8 33 cl',8,3500,45,'cervezas','./assets/imgs/cervezas/ciney-blonde.jpg','local')
        // pm.addProduct('Amalaya Gran Corte', 'Vino Tinto Blend Salta',10, 2800,60, 'vinos','./assets/imgs/vinos/Amalaya-Gran-Corte-Barrel-Selection-01-Mercado.png','local')
        
        // pm.addProduct('San Pellegrino', 'Aguan con Gas 33 cl',null, 1800,30, 'bebidas', './assets/imgs/bebidas/SAN-PELLEGRINO-SPARKLING-NATURAL-MINERAL-WATER-VIDRIO-CON-GAS-505ML-MERCADO-LIBRE-1.png', 'local')  
        // pm.addProduct('Jamon Serrano Tangama', 'Jamon Iberico Importado de España, 100gr',null, 4900,20, 'comida', './assets/imgs/comida/00750104005196L.webp','local')
        // pm.addProduct('Whisky Swing ', 'Johnny Walker, Alc.40, 75cc',40, 9000,30, 'whiskies', './assets/imgs/licores/whiskyswing.jpg', 'local')  
        // pm.addProduct('El Profeta Gin', 'Ginebra Artesal, hecha en Argentina, Alc.40 75 cl', 40, 2500,29, 'licores', './assets/imgs/licores/ginebra-el-profeta-750-ml.jpg','local')  
        // pm.addProduct('Ron Zaracapa XO', 'Ron Extra Añejo, Hecho en Nicaragua, Alc.40, 75 cl',40, 12500,23, 'licores', './assets/imgs/licores/ron-zaracapa-xo.webp','local')  
        // pm.addProduct('Tequila Patron', 'Aguan con Gas 33 cl',40, 8790,30, 'licores', './assets/imgs/licores/anejopatron.jpg', 'local')  
        // pm.addProduct('J. Walker Red Label', 'Aguan con Gas 33 cl',40,6500,30, 'whiskies', './assets/imgs/licores/johnnie-walker-red-label-blended-scotch-whisky-01.webp','local')  
        // pm.addProduct('Bombay Saphire Gin', 'Gin Extra Destilada, 75cl',40, 8000,30, 'licores', './assets/imgs/licores/bombay-saphire.webp', 'local')  
        // pm.addProduct('Luca Old Vine', 'Aguan con Gas 33 cl',15, 5000,14, 'vinos', './assets/imgs/vinos/luca-malbec.png', 'local')  
        // pm.addProduct('El Enemigo Malbec', 'Aguan con Gas 33 cl',18, 4200,15, 'vinos', './assets/imgs/vinos/vino-el-enemigo-malbec-botella-750ml-a582a8a18e.webp','local')  
        // pm.addProduct('Corona 6-pack Botella', 'Aguan con Gas 33 cl',2, 1800,30, 'cervezas', './assets/imgs/cervezas/coronasixpack.jpg','local')  
        // pm.addProduct('Quilmes de Lata 6-pack', 'Aguan con Gas 33 cl',2, 1800,30, 'cervezas', './assets/imgs/cervezas/quilmes473.png','local')
        // pm.addProduct('Chimay Bleau', 'Aguan con Gas 33 cl',8, 1800,30, 'cervezas', './assets/imgs/cervezas/Chimay bleu.jpg','local')
        // pm.addProduct('MacCallagan 12', 'whisky ',40, 14000,30, 'whiskies', './assets/imgs/whiskies/macallan-12-anos-whisky-1617701221.jpg','local')            
        // pm.addProduct('Salentein, Blanc des Blancs','Espumante extra-brut', 14,8500, 20, 'burbujas', './assets/imgs/espumantes/salentein blanc des blancs.webp')
        // pm.addProduct('Animales Extra Brut','Espumante extra-brut', 14,5500, 20, 'burbujas', './assets/imgs/espumantes/animales-espumante-extra-brut.webp')
        // pm.addProduct('Manos Negras,Extra Brut','Espumante extra-brut', 14,3500, 20, 'burbujas', './assets/imgs/espumantesmanos-negras-exta-brut.webp')
        // pm.addProduct('Freixennet, Prosecco Dry','Espumante extra-brut', 14,8500, 20, 'burbujas', './assets/imgs/espumantes/freixennet-prosecco.webp')
    }


    
}

export default createInventory