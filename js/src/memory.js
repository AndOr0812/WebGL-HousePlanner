var engine3D = window.engine3D || {};
var engine2D = window.engine2D || {};

engine3D.freeMemory = function()
{
    if (scene3D instanceof THREE.Scene) 
    {
        while (scene3D.children.length > 0)
        {
            var obj = scene3D.children[scene3D.children.length - 1];
            //obj.mesh.geometry.dispose();
            //obj.mesh.material.map.dispose();
            //obj.mesh.material.dispose();
            
            if (obj.geometry)                                                                               
                obj.geometry.dispose();                                                                              
            
            if (obj.material) {
                /*                                                                                 
                    if (obj.material instanceof THREE.MeshFaceMaterial) {                 
                    $.each(obj.material.materials, function(idx, obj) {                 
                        obj.dispose();                                                                                   
                    });                                                                                                
                } else {
                */
                if (obj.material.map)
                    obj.material.map.dispose();

                obj.material.dispose();                                                                            
                //}                                                                                          
            }  

            scene3D.remove(obj);
        }
        scene3DObjectUnselect();
    }

    if(camera3DQuad[0] instanceof THREE.OrthographicCamera)
    {
        for(i = 0; i<4; i++)
        {
            camera3DQuad[i] = null;
            rendererQuad[i] = null;
        }
    }
    //skyMesh = new THREE.Object3D();
    //scene3D.remove(skyMesh);
    //scene3D = null;
    //scene3D = new THREE.Scene();
};

engine2D.freeMemory = function ()
{
	var children = paper.project.activeLayer.children;

	for (var i = 0; i < children.length; i++) {
		children[i].remove();
	}
    
    //canvas2D = null;
};