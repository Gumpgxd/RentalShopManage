// 封装Storage方法
const STORAGE_KEY = "mall";
export default {
  // 往操作的JSON对象中添加一级值和二级值的方法
  setItem(key, value, module_name) {
    // 添加二级key value 
    // 同样需要先获取二级属性值的值 比如给hobby中添加一个a属性等于10
    if (module_name) {
      let val = this.getItem(module_name); //得到hobby对象{} hobby的名是module——name
      // 往这个hobby对象中添加一个属性a 值等于10 此时hobby中已经发生变化
      val[key] = value;
      // 将hobby作为jsonObj对象的key，值为hobby名对应的对象，再次塞到Storage对象中
      this.setItem(module_name, val)
    } else {
      // 添加一级key value 先取出Storage中的对象
      let jsonObj = this.getStorage();
      // 往一个对象中添加属性及值
      jsonObj[key] = value;
      // 将此对象作为值，将STORAGE_KEY作为属性再重新塞到Storage对象中
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(jsonObj));
    }
  },

  // 读取获取到的JSON对象中值的方法
  // 1.判断是否有二级 如果有 递归获取 如果没有 就是一级获取 
  // 2.边界值的判断
  getItem(key, module_name) {
    // 获取二级属性值 ，再从值中获取对应的值
    if (module_name) {
      // 先获取二级属性值的对象(递归获取)
      let val = this.getItem(module_name);
      //   如果有值，再获取对应的key属性的值
      if (val) {
        return val[key];
      }
    }
    //   只获取一级属性值
    return this.getStorage()[key];
  },

  //   为什么要封装？可以通过一个key对应一个value，这个value是一个JSON格式的对象
  //   而不是字符串，将所有原本要很多对键值对的信息存储在一个JSON对象中即可
  //   原本的api clear只能全部 删除 我们封装的要让他选择性的删除某个值

  //   获取当前window.sessionStorage中全部的值 其实也就是一个总的key（理解为数据库的名称）获取的是数据表
  //   其实本质就是获取一个JSON对象，便于后续操作

  // 获取存贮在浏览器中Storage对象中的所有数据
  getStorage() {
    // return Window.sessionStorage.getItem(); 获取到的是一个字符串
    //   1.将字符串转化为JSON对象格式，便于查看
    //   2.考虑边界值 如果没有获取到 就设置一个空的对象，便于之后存储值
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },


  // 清除Storage中某个值的方法而不是全部清除
  clear(key, module_name) {
    let jsonObj = this.getStorage();
    //   删除二级属性值的方法
    if (module_name) {
      //   先找到二级属性所对应的对象
      if (!module_name) {
        return
      } else {
        delete jsonObj[module_name][key];
      }
    } else {
      //   删除一级属性值的方法
      //   从一个对象中删除某个属性
      delete jsonObj[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(jsonObj))
  }
}
