$base = 'c:\Users\DELL\OneDrive\Desktop\web dev\youngforchrist'

# LEADERSHIP
$f = "$base\pages\leadership\leadership.html"
$c = Get-Content $f -Raw -Encoding UTF8
$c = $c -replace '\.\.\/\.\.\/images\/leader-1\.jpg','../../images/youngforchristlogo.png'
$c = $c -replace '\.\.\/\.\.\/images\/leader-2\.jpg','../../images/youngforchristlogo.png'
$c = $c -replace '\.\.\/\.\.\/images\/leader-3\.jpg','../../images/youngforchristlogo.png'
$c = $c -replace '\.\.\/\.\.\/images\/leader-4\.jpg','../../images/youngforchristlogo.png'
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "leadership done"

# GALLERY
$f = "$base\pages\gallery\gallery.html"
$c = Get-Content $f -Raw -Encoding UTF8
$c = $c -replace '\.\.\/\.\.\/images\/gallery-1\.jpg','../../images/youth-fellowship.png'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-2\.jpg','../../images/donation-img.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-3\.jpg','../../images/our-vision.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-4\.jpg','../../images/sacredheart-novena.png'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-5\.jpg','../../images/holyrosary-img.png'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-6\.jpg','../../images/bible-studies.png'
$c = $c -replace '\.\.\/\.\.\/images\/activity-1\.jpg','../../images/youth-fellowship.png'
$c = $c -replace '\.\.\/\.\.\/images\/activity-2\.jpg','../../images/donation-img.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/activity-3\.jpg','../../images/our-vision.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/news-1\.jpg','../../images/st-josephnovena.png'
$c = $c -replace '\.\.\/\.\.\/images\/news-2\.jpg','../../images/divinemercy-novena.png'
$c = $c -replace '\.\.\/\.\.\/images\/news-3\.jpg','../../images/holyspirit-novena.png'
$c = $c -replace '\.\.\/\.\.\/images\/novena-1\.jpg','../../images/sacredheart-novena.png'
$c = $c -replace '\.\.\/\.\.\/images\/novena-2\.jpg','../../images/immaculate-novena.png'
$c = $c -replace '\.\.\/\.\.\/images\/novena-3\.jpg','../../images/holyspirit-novena.png'
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "gallery done"

# ACTIVITIES
$f = "$base\pages\activities\activities.html"
$c = Get-Content $f -Raw -Encoding UTF8
$c = $c -replace '\.\.\/\.\.\/images\/activity-1\.jpg','../../images/youth-fellowship.png'
$c = $c -replace '\.\.\/\.\.\/images\/activity-2\.jpg','../../images/donation-img.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/activity-3\.jpg','../../images/bible-studies.png'
$c = $c -replace '\.\.\/\.\.\/images\/about-preview\.jpg','../../images/our-vision.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-1\.jpg','../../images/youth-fellowship.png'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-2\.jpg','../../images/donation-img.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-3\.jpg','../../images/our-vision.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-4\.jpg','../../images/sacredheart-novena.png'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-5\.jpg','../../images/holyrosary-img.png'
$c = $c -replace '\.\.\/\.\.\/images\/gallery-6\.jpg','../../images/bible-studies.png'
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "activities done"

# ABOUT
$f = "$base\pages\about\about.html"
$c = Get-Content $f -Raw -Encoding UTF8
$c = $c -replace '\.\.\/\.\.\/images\/about-history\.jpg','../../images/our-vision.jpg'
$c = $c -replace '\.\.\/\.\.\/images\/about-mission\.jpg','../../images/youth-fellowship.png'
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "about done"

Write-Host "ALL DONE"
