// data为一维数组
// parentId 为父节点的id,初始化0为根节点id
const rootParentId = 0;
const filterArray = (data, parentId = rootParentId)=> {
    let tree = [];
    data.forEach( (node)=>{
        if (node.parentId !== parentId) return;
        node.children = filterArray(data,node.id);
        tree.push(node);
    });
    return tree;
}
export default filterArray;
