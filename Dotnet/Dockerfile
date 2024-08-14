# Use the official .NET SDK image as the build environment
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set the working directory
WORKDIR /app

# Copy the project file and restore any dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the application files and build the app
COPY . ./
RUN dotnet publish -c Release -o out

# Use the official .NET runtime image for the final container
FROM mcr.microsoft.com/dotnet/runtime:6.0 AS runtime

# Set the working directory
WORKDIR /app

# Copy the published application from the build container
COPY --from=build /app/out ./

# Set the entry point for the application
ENTRYPOINT ["dotnet", "HelloWorldApp.dll"]
