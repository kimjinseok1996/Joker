$(function(){
            
            var maintextnum = 0;
            var maintextinter;
            var video = document.getElementById("murraykill");
            video.pause();
            
            
            $("#mainpage").addClass("on");
            
            maintextinter = setInterval(function(){
                if(maintextnum < 350){
                    $("#mainpage #textwrap #textcover").css({"background":"linear-gradient(to right, transparent, black " +maintextnum+ "%)"});
                    maintextnum ++;
                }
                else{
                    clearInterval(maintextinter);
                    $("#nextbtn").css({"display":"block"});
                    $("#mainpage #bgimg").css({"opacity":"0.5"});
                }             
            },10);
            
            var pagenum = 0;
            $("#nextbtn").on("click",function(){
                pagenum ++;
                $("section").removeClass("on");
                $("section").eq(pagenum).addClass("on");
                
                if(pagenum >=1){
                    $("#prevbtn").css({"display":"block"});
                }
                
                if(pagenum == 1){
                    setTimeout(function(){
                        var firstpagenum = 0;
                        var firstpageinter;

                        firstpageinter = setInterval(function(){
                           if(firstpagenum < 280){
                                $("#firstpage_titlecover").css({"background":"linear-gradient(to right, transparent, black " +firstpagenum+ "%)"});
                                firstpagenum ++;
                            }         
                            else{
                                clearInterval(firstpageinter);
                                $("#firstpageimg").css({"opacity":"0.3"});
                                $("#firstpage_maintextwrap").css({"opacity":"1"});
                            }  
                        },7);
                      },1500);
                 }
                if(pagenum == 2){
                    setTimeout(function(){
                        var secondpagenum = 0;
                        var secondpageinter;

                    secondpageinter = setInterval(function(){
                       if(secondpagenum < 280){
                            $("#secondpage_titlecover").css({"background":"linear-gradient(to right, transparent, black " +secondpagenum+ "%)"});
                            secondpagenum ++;
                        }         
                        else{
                            clearInterval(secondpageinter);
                            $("#secondpageimg").css({"opacity":"0.3"});
                            $("#secondpage_maintextwrap p:nth-child(1)").css({"opacity":"1"});
                            setTimeout(function(){
                                $("#secondpage_maintextwrap p:nth-child(2)").css({"opacity":"1"});
                            },2000);
                        }  
                    },7);
                    },1500);
                }
                if(pagenum == 3){
                            setTimeout(function(){
                                $("#thirdpage #train0").css({"opacity":"0"});
                            },1000);

                    setTimeout(function(){
                        var train1pagenum = 0;
                        var train1inter;

                        $("#train1img").css({"opacity":"1"});

                        train1inter = setInterval(function(){
                            if(train1pagenum < 280){
                                $("#train1textcover").css({"background":"linear-gradient(to right, transparent, black " +train1pagenum+ "%)"});
                                train1pagenum ++;
                            }         
                            else{
                                 clearInterval(train1inter);
                                }  
                            },10);
                    },2500);

                    setTimeout(function(){
                        var train2pagenum = 0;
                        var train2inter;

                        $("#train2img").css({"opacity":"1"});

                        train2inter = setInterval(function(){
                            if(train2pagenum < 280){
                                $("#train2textcover").css({"background":"linear-gradient(to left, transparent, black " +train2pagenum+ "%)"});
                                train2pagenum ++;
                            }         
                            else{
                                 clearInterval(train2inter);
                                }  
                            },10);
                    },4800);

                    setTimeout(function(){
                        var train3pagenum = 0;
                        var train3inter;

                        $("#train3img").css({"opacity":"1"});

                        train3inter = setInterval(function(){
                            if(train3pagenum < 280){
                                $("#train3textcover").css({"background":"linear-gradient(to right, transparent, black " +train3pagenum+ "%)"});
                                train3pagenum ++;
                            }         
                            else{
                                 clearInterval(train3inter);
                                }  
                            },10);
                    },7100);
                }
                
                if(pagenum == 4){
                    $(".btn").css({"display":"none"}); // none
                    
                    setTimeout(function(){
                        var fourpagenum = 0;
                        var fourpageinter;  
                        
                        fourpageinter = setInterval(function(){
                            if(fourpagenum < 380){
                                $("#fourpage_titlecover").css({"background":"linear-gradient(to right, transparent, black " +fourpagenum+ "%)"});
                                fourpagenum ++;
                            }         
                            else{
                                clearInterval(fourpageinter);
                            }  
                        },10);
            
                        setTimeout(function(){
                            $("#fourpage_titlewrap").css({"opacity":"0.2"});
                            $("#fourpage_titlecover").css({"opacity":"0"});
                            $("#fourpage_bggif").css({"opacity":"0.4"});
                            $(".btn").css({"display":"block"});
                        },5000);
                    },1200);
                }
                
                if(pagenum == 5){
                    $(".btn").css({"display":"none"}); //none
                    
                    var fivepagenum = 0;
                    var fivepageinter;  

                    fivepageinter = setInterval(function(){
                        if(fivepagenum < 380){
                            $("#fivepage_titlecover").css({"background":"linear-gradient(to right, transparent, black " +fivepagenum+ "%)"});
                            fivepagenum ++;
                        }         
                        else{
                            clearInterval(fivepageinter);
                            $("#fivepage_titlewrap").css({"opacity":"0"});
                            $("#fivepage_murray").css({"opacity":"1"});
                            setTimeout(function(){
                                $("#fivepage_text p:nth-child(1)").css({"opacity":"1"});
                            },3500);
                            setTimeout(function(){
                                $("#fivepage_murray").css({"opacity":"0"});
                                $("#fivepage_murraybet").css({"opacity":"1"});
                                $("#fivepage_text p:nth-child(2)").css({"opacity":"1"});
                                setTimeout(function(){
                                    $(".btn").css({"display":"block"});
                                },3000);
                            },7500);
                        }  
                    },10);
                }
                
                if(pagenum == 6){
                    $(".btn").css({"display":"none"}); //none
                    
                    setTimeout(function(){
                        $("#jokermakeupimg").css({"opacity":"0.3"});
                        $("#sixpage_text").css({"opacity":"1"});
                        setTimeout(function(){
                            $(".btn").css({"display":"block"});
                        },2500);
                    },3200);
                }
                
                if(pagenum == 7){
                    $(".btn").css({"display":"none"}); //none
                    
                    stairdance();
                    
                    function stairdance(){
                        setTimeout(function(){
                            $("#stair1").addClass("play");
                        },1500);
                        setTimeout(function(){
                            $("#stair1").removeClass("play");
                            $("#stair2").addClass("play");
                        },10500);
                        setTimeout(function(){
                            $("#stair2").removeClass("play");
                            $("#stair3").addClass("play");
                        },13000);
                        setTimeout(function(){
                            $("#stair3").removeClass("play");
                            $("#stair4").addClass("play");
                        },16500);
                        setTimeout(function(){
                            $("#stair4").removeClass("play");
                            $("#stair5").addClass("play");
                        },21000);
                        setTimeout(function(){
                            $("#stair5").removeClass("play");
                            $("#stair6").addClass("play");
                        },26200);
                        setTimeout(function(){
                            $("#stair6").removeClass("play");
                            $("#stair7").addClass("play");
                        },33500);
                        setTimeout(function(){
                            $("#stair7").removeClass("play");
                            $(".btn").css({"display":"block"});
                        },41500);
                    }
                    
                }
                
                if(pagenum == 8){
                    $(".btn").css({"display":"none"}); //none
                    setTimeout(function(){
                        $("#eightpage_text").css({"opacity":"1"});
                    },1000);
                    setTimeout(function(){
                        $("#eightpage_text").css({"opacity":"0.3"});
                        $("#eightpage_img1").css({"opacity":"1"});
                    },5000);
                    setTimeout(function(){
                        $("#eightpage_img1").css({"opacity":"0"});
                        $("#eightpage_img2").css({"opacity":"1"});
                    },10000);
                    setTimeout(function(){
                        $("#eightpage_img2").css({"opacity":"0"});
                        $("#eightpage_img3").css({"opacity":"1"});
                        $(".btn").css({"display":"block"});
                    },15000);
                }
                
                if(pagenum == 9){
                    $(".btn").css({"display":"none"}); // none
                    setTimeout(function(){
                        $("#ninepage_text p:nth-child(1)").css({"opacity":"1"});
                    },1000);
                    setTimeout(function(){
                        $("#ninepage_text p:nth-child(1)").css({"opacity":"0"});
                    },3000);
                    setTimeout(function(){
                        $("#ninepage_text p:nth-child(2)").css({"opacity":"1"});
                    },5500);
                    setTimeout(function(){
                        $("#ninepage_text p:nth-child(2)").css({"opacity":"0"});
                    },8000);
                    setTimeout(function(){
                        $("#ninepage_text p:nth-child(3)").css({"opacity":"1"});
                    },10800);
                    setTimeout(function(){
                        $("#ninepage_img").css({"opacity":"1"});
                        $("#ninepage_text p:nth-child(3)").css({"opacity":"0", "transition":"1s"});
                    },13500);
                     setTimeout(function(){
                        $("#ninepage_img").css({"opacity":"0", "transition":"1s"});
                         $(".btn").css({"display":"block"});
                    },18000);
                }
                
                if(pagenum == 10){
                    $("#tenwonpage").css({"display":"none"});
                    $("#tentwopage").css({"display":"none"});
                    
                    $(".btn").css({"display":"none"}); //none
                    video.play();
                    $("#shotbtn").hover(function(){
                        $("#shotbtngage").css({"animation-play-state":"paused"});
                    },function(){
                        $("#shotbtngage").css({"animation-play-state":"running"});
                    });

                    setTimeout(function(){
                        video.pause();
                        $("#shotbtn").css({"display":"block"});

                        $("#shotbtn").on("click",function(){
                            video.play();
                            $("#shotbtn").css({"display":"none"});

                            setTimeout(function(){
                                $("#videowrap").css({"opacity":"0", "transition":"2.5s"});
                                $(".btn").css({"display":"block"});
                            },44300); //44300
                        });

                    },95700); //95700
                }
                
                if(pagenum == 11){
                    $("#tenwonpage").css({"display":"block"});
                    $("#tentwopage").css({"display":"block"});
                    var tenwonpagenum = 0;
                    var tenwonpageinter;
                    setTimeout(function(){
                        $("#tenwonpage_img").css({"opacity":"1"});
                    tenwonpageinter = setInterval(function(){
                        if(tenwonpagenum < 580){
                            $("#tenwonpage_textcover").css({"background":"linear-gradient(to right, transparent, black " +tenwonpagenum+ "%)"});
                            tenwonpagenum ++;
                        }         
                        else{
                            clearInterval(tenwonpageinter);
                            $("#secondpageimg").css({"opacity":"0.3"});
                        }
                    },10);
                    },1000);
                }
                
                if(pagenum == 12){ 
                    $("#nextbtn").css({"display":"none"});
                    var tentwonum = -1;
                    setInterval(function(){
                        if(tentwonum <= 7){
                            tentwonum ++;
                            $(".tentwo_img").removeClass("tentwo_on");
                            $(".tentwo_img").eq(tentwonum).addClass("tentwo_on");
                        }
                        if(tentwonum == 7){
                            $("#tentwo_text").css({"opacity":"1"});
                        }
                    },2600);
                }
            });
            
            $("#prevbtn").on("click",function(){
                pagenum--;
                $("section").removeClass("on");
                $("section").eq(pagenum).addClass("on");
            });
        });