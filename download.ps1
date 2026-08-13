$urls = @(
  "/assets/bikes/SPORT/CB650R/imgi_52_imgi_50_CB-650R-NEGRA.png",
  "/assets/bikes/SPORT/CB125F/imgi_17_honda-cb125f-20-std-rojo1.png",
  "/assets/bikes/SPORT/CB100/imgi_15_honda-cb-100-negra.png",
  "/assets/bikes/SPORT/CB1000R/imgi_35_Hornet-modulo-color.png",
  "/assets/bikes/SPORT/CB125FDLX/imgi_21_honda-cb125f-20-dlx-rojo.png",
  "/assets/bikes/SPORT/CB125FMAX/imgi_50_cb125f-max-rojo.png",
  "/assets/bikes/SPORT/CB190R2.0/imgi_25_honda-cb190r-gris.png",
  "/assets/bikes/SPORT/CB300F/imgi_29_Nueva-CB-300F-rojo.png",
  "/assets/bikes/SPORT/NX190/imgi_27_nx-190-negro.png",
  "/assets/bikes/SPORT/XBLADE160/imgi_23_xblade-rojo.png",
  "/assets/bikes/SUPER SPORT/CBR 650R/imgi_51_CBR-650R-2024-nueva.png",
  "/assets/bikes/SUPER SPORT/CBR1000RRR/imgi_52_CBR-1000-RRR-honda.png",
  "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Dio LED DLX/imgi_50_nueva-dio-dlx-gris.png",
  "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Dio LED STD/imgi_50_nueva-dio-std-azul.png",
  "/assets/bikes/SCOOTER Y SEMIAUTOMATICA/Wave 110S/imgi_51_nueva-honda-wave-110-gris.png",
  "/assets/bikes/ENDURO Y MOTOCROSS/CRF250F/imgi_66_honda-crf-250r.png",
  "/assets/bikes/ENDURO Y MOTOCROSS/CRF110F/imgi_51_honda-crf-110.png",
  "/assets/bikes/ENDURO Y MOTOCROSS/CRF250R/imgi_68_CRF250RX.png",
  "/assets/bikes/ENDURO Y MOTOCROSS/CRF250RX/imgi_51_CRF250RX.png",
  "/assets/bikes/ENDURO Y MOTOCROSS/CRF450R/imgi_72_CRF-450-RX.png",
  "/assets/bikes/ENDURO Y MOTOCROSS/CRF450RX/imgi_51_CRF-450-RX.png",
  "/assets/bikes/TODO TERRENO/XR150L/imgi_52_XR150L-20-blanco-version.png",
  "/assets/bikes/TODO TERRENO/XR190L/imgi_52_nueva-xr190l-abs-20-blanca.png",
  "/assets/bikes/TODO TERRENO/XRE 300 SAHARA DLX/imgi_52_xre-300-sahara-rally-245bb.png",
  "/assets/bikes/TODO TERRENO/XRE 300 SAHARA STD/imgi_52_xre-300-sahara-std.png",
  "/assets/bikes/TODO TERRENO/XR 300L 2026/imgi_52_imgi_1_xr-300l-tornado-gris.png",
  "/assets/bikes/SCRAMBLER/imgi_51_honda-cb350d-rojo.png",
  "/assets/bikes/NAVI/NAVI/imgi_51_navi-rojo-n.png",
  "/assets/bikes/NAVI/NAVI ADVENTURE/imgi_50_Navi_Lateral_Derecha_Cafe2.png",
  "/assets/bikes/NAVI/NAVI MIX/imgi_50_navi-mix-negro.png",
  "/assets/bikes/NAVI/NAVI RALLY/imgi_50_honda-navi-rally.png"
)

$baseUrl = "https://honsupermotos.com"
$baseDir = "c:\Users\USUARIO\clon pagina motos\public"

foreach ($url in $urls) {
    # Generate local path
    $localPath = Join-Path -Path $baseDir -ChildPath $url.Replace("/", "\")
    
    # Create directory if it doesn't exist
    $dir = Split-Path -Path $localPath
    if (-not (Test-Path -Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
    }
    
    # Download the file
    $remoteUrl = "$baseUrl$url"
    Write-Host "Downloading $remoteUrl to $localPath"
    try {
        Invoke-WebRequest -Uri $remoteUrl -OutFile $localPath -ErrorAction Stop
    } catch {
        Write-Host "Failed to download $remoteUrl : $_"
    }
}
Write-Host "Done!"
