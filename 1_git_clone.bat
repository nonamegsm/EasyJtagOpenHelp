@echo off   

rem Ваш путь к repository !!!!!!!!!!!!   
set mydrive=F:\
set mypath=\GitHub\EasyJtagOpenHelp1

rem устанавливаем текущий путь    
cd %mydrive%    
cd %mypath%    

rem clone откуда копировать repository  
git clone https://github.com/EvgenProjects/GameNode.js