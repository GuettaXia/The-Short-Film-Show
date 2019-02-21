<template>
	<view class="">
		<view class="picbox">
		<image src="../../static/icons/logo.png" class="profilepic"></image>	
		<text class="change">change picture</text>
		</view>
		
		<view class="infomation">
			<view class="infoline">
				<text class="info-title">Nicke name</text>
				<text class="info-content">Daming</text>
			</view>
			<view class="infoline">
				<text class="info-title">Nicke name</text>
				<text class="info-content">Daming</text>
			</view><view class="infoline">
				<text class="info-title">Nicke name</text>
				<text class="info-content">Daming</text>
			</view><view class="infoline">
				<text class="info-title">Nicke name</text>
				<text class="info-content">Daming</text>
			</view><view class="infoline">
				<text class="info-title">Nicke name</text>
				<text class="info-content">Daming</text>
			</view><view class="infoline">
				<text class="info-title">Nicke name</text>
				<text class="info-content">Daming</text>
			</view>
		</view>
	</view>
</template>

<script>
// 		export default {
// 		data() {
// 			return {
// 				
// 			}
// 		},
// 	
// 		onLoad: function() {
// 			uni.setNavigationBarTitle({
// 				title: "Profile"
// 			});
// 	
// 		}
// 	}
</script>

<style>
page{
	height: 100%;
	width: 100%;
}
.background{
	color: #8A6DE9;

}
/* 头像框 */
.picbox{
	display: flex;
	flex-direction:column;
	width: 100%;
	background-color: #000000;
	height: 360upx;
	align-items: center;
	justify-content: center;
	
}

.profilepic{
	width: 120upx;
	height: 120upx;
	border-radius: 60upx;
}
	/* 更改头像 */
.change{
	color: white;
	font-size: x-small;
	margin-top: 20upx;
}
/* 信息栏 */

.information{
	margin-top: 100upx;
	color: #007AFF;
}

.infoline{
	height: 100upx;
	display: flex;
}

.info-title{
	color: #888888;
	margin-left: 20upx;
	font-size: x-small;
}

.info-content{
	color: white;
	margin-left: 50upx;
	font-size: small;
}

</style>
