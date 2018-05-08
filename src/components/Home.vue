<template>
 <div class="button">
     <el-row>
        <el-button round><router-link to="/users">Users</router-link></el-button>
        <el-button round>button 1</el-button>
     </el-row>
 </div>

</template>

<script>
export default {
    computed:{
       
    }
}
</script>

<style>
.button{
  display: table-cell;
  vertical-align: middle;
}
</style>
