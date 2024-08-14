# Use the official .NET SDK image as the build environment
FROM paketobuildpacks/dotnet-core-sdk:latest AS build

workdir /app

copy . .

RUN dotnet build

RUN dotnet run
