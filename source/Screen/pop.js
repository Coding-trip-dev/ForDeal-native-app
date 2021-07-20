<View style={styles.container}>
<View style={styles.container1}>
<View style={styles.container2}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"80%",height:"60%"}}></Image>    
  <Text>Women's Cloth</Text>
   <TouchableOpacity style={{width:"90%",height:20,backgroundColor:"rgb(252,183,56)",borderRadius:10,alignItems:"center"}}>
     <Text>
     1 Sar Snap Up
     </Text>
     </TouchableOpacity>
</View>
<View style={styles.container2}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"80%",height:"60%"}}></Image>    
  <Text>Women's Cloth</Text>
   <TouchableOpacity style={{width:"90%",height:20,backgroundColor:"rgb(252,183,56)",borderRadius:10,alignItems:"center"}}>
     <Text>
     1 Sar Snap Up
     </Text>
     </TouchableOpacity>
</View>
<View style={styles.container2}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"80%",height:"60%"}}></Image>    
  <Text>Women's Cloth</Text>
   <TouchableOpacity style={{width:"90%",height:20,backgroundColor:"rgb(252,183,56)",borderRadius:10,alignItems:"center"}}>
     <Text>
     1 Sar Snap Up
     </Text>
     </TouchableOpacity>
</View>
<View style={styles.container2}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"80%",height:"60%"}}></Image>    
  <Text>Women's Cloth</Text>
   <TouchableOpacity style={{width:"90%",height:20,backgroundColor:"rgb(252,183,56)",borderRadius:10,alignItems:"center"}}>
     <Text>
     1 Sar Snap Up
     </Text>
     </TouchableOpacity>
</View>
<View style={styles.container2}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"80%",height:"60%"}}></Image>    
  <Text>Women's Cloth</Text>
   <TouchableOpacity style={{width:"90%",height:20,backgroundColor:"rgb(252,183,56)",borderRadius:10,alignItems:"center"}}>
     <Text>
     1 Sar Snap Up
     </Text>
     </TouchableOpacity>
</View>
<View style={styles.container2}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"80%",height:"60%"}}></Image>    
  <Text>Women's Cloth</Text>
   <TouchableOpacity style={{width:"90%",height:20,backgroundColor:"rgb(252,183,56)",borderRadius:10,alignItems:"center"}}>
     <Text>
     1 Sar Snap Up
     </Text>
     </TouchableOpacity>
</View>

</View>



{/* <ScrollView style={{backgroundColor:"blue"}}> */}
<View style={styles.container3}>
<View style={styles.container4}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"100%",height:150}}></Image>    
  <Text style={{color:"silver"}}>Mens New Style,casual,fashionable trousers,overall..</Text>

     <Text style={{fontWeight:"bold"}}>
    US$ 332.09
     </Text>
</View>

<View style={styles.container4}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"100%",height:150}}></Image>    
  <Text style={{color:"silver"}}>Mens New Style,casual,fashionable trousers,overall..</Text>

     <Text style={{fontWeight:"bold"}}>
    US$ 332.09
     </Text>
</View>

<View style={styles.container4}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"100%",height:150}}></Image>    
  <Text style={{color:"silver"}}>Mens New Style,casual,fashionable trousers,overall..</Text>

     <Text style={{fontWeight:"bold"}}>
    US$ 332.09
     </Text>
</View>

<View style={styles.container4}>
  <Image source={require("../image/cloth.jpeg")} style={{width:"100%",height:150}}></Image>    
  <Text style={{color:"silver"}}>Mens New Style,casual,fashionable trousers,overall..</Text>

     <Text style={{fontWeight:"bold"}}>
    US$ 332.09
     </Text>
</View>

</View>
{/* </ScrollView> */}


</View>










const styles = StyleSheet.create({
container: {
flex: 1,
// backgroundColor: 'white',
backgroundColor: 'rgb(245,245,245)',

// paddingTop:20
// alignItems: 'center',
// justifyContent: 'center',
},
container1: {
// flex: 1,
flexDirection:"row",
width:"100%",height:300,
// backgroundColor: 'rgb(245,245,245)',
alignItems: 'center',
justifyContent: 'space-evenly',
flexWrap:"wrap"
},
container2: {
// flex: 1,
width:110,height:140,
backgroundColor: 'white',marginTop:8,
alignItems: 'center',
justifyContent: 'center',borderRadius:10,elevation:7
},
container3: {
flex: 1,
paddingTop:10,
alignItems: 'center',
justifyContent: 'space-around',borderRadius:10,flexDirection:"row",flexWrap:"wrap"
},
container4: {
// flex: 1,
width:165,height:260,
backgroundColor: 'white',marginTop:8,
alignItems: 'flex-start',
justifyContent: 'center',paddingLeft:10,
elevation:10,borderRadius:5
},
});