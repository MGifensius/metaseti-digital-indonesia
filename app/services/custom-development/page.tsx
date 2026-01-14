"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

// Custom ERP Demo Component - STAYS IN ENGLISH
function CustomERPDemo() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Acme Corp", product: "Software License", amount: 5000, status: "Completed" },
    { id: 2, customer: "Tech Solutions", product: "Web Development", amount: 12000, status: "In Progress" },
    { id: 3, customer: "Digital Agency", product: "AI Integration", amount: 8500, status: "Pending" },
    { id: 4, customer: "StartUp Inc", product: "Mobile App", amount: 15000, status: "In Progress" },
  ]);

  const [inventory, setInventory] = useState([
    { id: 1, item: "Servers", quantity: 25, status: "In Stock" },
    { id: 2, item: "Workstations", quantity: 8, status: "Low Stock" },
    { id: 3, item: "Network Equipment", quantity: 42, status: "In Stock" },
    { id: 4, item: "Software Licenses", quantity: 3, status: "Low Stock" },
  ]);

  const [showAddOrder, setShowAddOrder] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customer: "",
    product: "",
    amount: "",
  });

  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
  const activeOrders = orders.filter(o => o.status === "In Progress").length;
  const completedOrders = orders.filter(o => o.status === "Completed").length;

  const handleAddOrder = () => {
    if (newOrder.customer && newOrder.product && newOrder.amount) {
      const order = {
        id: orders.length + 1,
        customer: newOrder.customer,
        product: newOrder.product,
        amount: parseInt(newOrder.amount),
        status: "Pending",
      };
      setOrders([...orders, order]);
      setNewOrder({ customer: "", product: "", amount: "" });
      setShowAddOrder(false);
    }
  };

  const handleDeleteOrder = (id: number) => {
    setOrders(orders.filter(o => o.id !== id));
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  // Calculate data for charts
  const monthlyData = [
    { month: "Jan", value: 42000 },
    { month: "Feb", value: 55000 },
    { month: "Mar", value: 48000 },
    { month: "Apr", value: 68000 },
    { month: "May", value: 52000 },
    { month: "Jun", value: totalRevenue },
  ];

  const maxValue = Math.max(...monthlyData.map(d => d.value));

  const categoryData = [
    { name: "Software", value: 35, color: "from-blue-500 to-blue-600" },
    { name: "Development", value: 40, color: "from-purple-500 to-purple-600" },
    { name: "Consulting", value: 25, color: "from-pink-500 to-pink-600" },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="border border-white/10 p-4 md:p-6 hover:border-white/20 transition-colors">
          <p className="text-xs text-gray-500 mb-2">Total Revenue</p>
          <p className="text-2xl md:text-3xl font-light text-white mb-1">
            ${(totalRevenue / 1000).toFixed(1)}K
          </p>
          <p className="text-xs text-green-400">↑ 12% from last month</p>
        </div>
        <div className="border border-white/10 p-4 md:p-6 hover:border-white/20 transition-colors">
          <p className="text-xs text-gray-500 mb-2">Active Orders</p>
          <p className="text-2xl md:text-3xl font-light text-white mb-1">{activeOrders}</p>
          <p className="text-xs text-blue-400">In Progress</p>
        </div>
        <div className="border border-white/10 p-4 md:p-6 hover:border-white/20 transition-colors">
          <p className="text-xs text-gray-500 mb-2">Completed</p>
          <p className="text-2xl md:text-3xl font-light text-white mb-1">{completedOrders}</p>
          <p className="text-xs text-gray-400">This month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Bar Chart */}
        <div className="border border-white/10 p-4 md:p-6">
          <h3 className="text-sm text-gray-400 mb-4">Monthly Revenue</h3>
          <div className="mb-2">
            <div className="h-40 md:h-48 flex items-end justify-between gap-1 md:gap-2 relative">
              {monthlyData.map((data, i) => {
                const heightPercentage = (data.value / maxValue) * 100;
                return (
                  <div key={i} className="flex-1 h-full flex items-end relative group">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: heightPercentage / 100 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                      className="w-full h-full bg-gradient-to-t from-blue-500 to-purple-500 hover:opacity-80 transition-opacity cursor-pointer origin-bottom"
                    />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                      ${(data.value / 1000).toFixed(1)}K
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between gap-1">
            {monthlyData.map((data, i) => (
              <span key={i} className="flex-1 text-center text-[10px] md:text-xs text-gray-500">
                {data.month}
              </span>
            ))}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="border border-white/10 p-4 md:p-6">
          <h3 className="text-sm text-gray-400 mb-4">Revenue by Category</h3>
          <div className="flex items-center justify-center h-40 md:h-48">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Simplified pie chart using conic-gradient */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative">
                <div className="absolute inset-3 md:inset-4 rounded-full bg-black flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-light text-white">100%</p>
                    <p className="text-[10px] md:text-xs text-gray-400">Total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {categoryData.map((cat, i) => (
              <div key={i} className="flex items-center justify-between text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
                  <span className="text-gray-400">{cat.name}</span>
                </div>
                <span className="text-white">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders Management */}
      <div className="border border-white/10 mb-6 md:mb-8">
        <div className="bg-white/5 px-4 md:px-6 py-3 md:py-4 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h3 className="text-base md:text-lg font-light text-white">Orders Management</h3>
          <button
            onClick={() => setShowAddOrder(true)}
            className="w-full sm:w-auto px-4 py-2 bg-white text-black text-sm hover:bg-gray-200 transition-all"
          >
            + Add Order
          </button>
        </div>

        {/* Add Order Form */}
        <AnimatePresence>
          {showAddOrder && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-b border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Customer Name"
                  value={newOrder.customer}
                  onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
                  className="bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 text-sm"
                />
                <input
                  type="text"
                  placeholder="Product"
                  value={newOrder.product}
                  onChange={(e) => setNewOrder({ ...newOrder, product: e.target.value })}
                  className="bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 text-sm"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={newOrder.amount}
                  onChange={(e) => setNewOrder({ ...newOrder, amount: e.target.value })}
                  className="bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 text-sm"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddOrder}
                    className="flex-1 py-2 bg-white text-black text-sm hover:bg-gray-200 transition-all"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setShowAddOrder(false)}
                    className="flex-1 py-2 border border-white/10 text-white text-sm hover:bg-white/5 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase whitespace-nowrap">ID</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase whitespace-nowrap">Customer</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase whitespace-nowrap">Product</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase whitespace-nowrap">Amount</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase whitespace-nowrap">Status</th>
                <th className="px-3 md:px-6 py-3 text-left text-xs text-gray-400 uppercase whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-400 whitespace-nowrap">#{order.id}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-white whitespace-nowrap">{order.customer}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-gray-400 whitespace-nowrap">{order.product}</td>
                  <td className="px-3 md:px-6 py-4 text-xs md:text-sm text-white whitespace-nowrap">${order.amount.toLocaleString()}</td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={`px-2 py-1 text-xs rounded bg-black/40 border border-white/10 ${
                        order.status === "Completed"
                          ? "text-green-400"
                          : order.status === "In Progress"
                          ? "text-blue-400"
                          : "text-yellow-400"
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="text-red-400 hover:text-red-300 text-xs md:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inventory */}
      <div className="border border-white/10">
        <div className="bg-white/5 px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
          <h3 className="text-base md:text-lg font-light text-white">Inventory Status</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6">
          {inventory.map((item) => (
            <div key={item.id} className="border border-white/10 p-3 md:p-4 hover:border-white/20 transition-colors">
              <h4 className="text-xs md:text-sm text-white mb-2">{item.item}</h4>
              <p className="text-xl md:text-2xl font-light text-white mb-2">{item.quantity}</p>
              <span className={`text-[10px] md:text-xs px-2 py-1 rounded ${
                item.status === "In Stock" 
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// IoT Smart Home Demo Component
function IoTSmartHomeDemo() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Living Room",
      icon: "🛋️",
      devices: [
        { id: 1, name: "Main Lights", type: "light", isOn: true },
        { id: 2, name: "TV", type: "tv", isOn: false },
        { id: 3, name: "Air Conditioner", type: "ac", isOn: true, temp: 24 },
        { id: 4, name: "Smart Speaker", type: "speaker", isOn: true },
      ],
    },
    {
      id: 2,
      name: "Bedroom",
      icon: "🛏️",
      devices: [
        { id: 5, name: "Bedroom Lights", type: "light", isOn: false },
        { id: 6, name: "Air Conditioner", type: "ac", isOn: false, temp: 22 },
        { id: 7, name: "Smart Curtains", type: "curtains", isOn: false },
      ],
    },
    {
      id: 3,
      name: "Kitchen",
      icon: "🍳",
      devices: [
        { id: 8, name: "Kitchen Lights", type: "light", isOn: true },
        { id: 9, name: "Refrigerator", type: "fridge", isOn: true },
        { id: 10, name: "Smart Oven", type: "oven", isOn: false },
      ],
    },
    {
      id: 4,
      name: "Bathroom",
      icon: "🚿",
      devices: [
        { id: 11, name: "Bathroom Lights", type: "light", isOn: false },
        { id: 12, name: "Water Heater", type: "heater", isOn: true },
        { id: 13, name: "Exhaust Fan", type: "fan", isOn: false },
      ],
    },
    {
      id: 5,
      name: "Garden",
      icon: "🌳",
      devices: [
        { id: 14, name: "Garden Lights", type: "light", isOn: false },
        { id: 15, name: "Sprinkler System", type: "sprinkler", isOn: false },
        { id: 16, name: "Security Camera", type: "camera", isOn: true },
      ],
    },
    {
      id: 6,
      name: "Garage",
      icon: "🚗",
      devices: [
        { id: 17, name: "Garage Door", type: "door", isOn: false },
        { id: 18, name: "Garage Lights", type: "light", isOn: false },
      ],
    },
  ]);

  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [view, setView] = useState<"home" | "room">("home");

  const toggleDevice = (roomId: number, deviceId: number) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        const updatedDevices = room.devices.map(device => 
          device.id === deviceId ? { ...device, isOn: !device.isOn } : device
        );
        const updatedRoom = { ...room, devices: updatedDevices };
        if (room.id === selectedRoom.id) {
          setSelectedRoom(updatedRoom);
        }
        return updatedRoom;
      }
      return room;
    }));
  };

  const toggleAllInRoom = (roomId: number) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        const allOn = room.devices.every(d => d.isOn);
        const updatedDevices = room.devices.map(device => ({ ...device, isOn: !allOn }));
        const updatedRoom = { ...room, devices: updatedDevices };
        if (room.id === selectedRoom.id) {
          setSelectedRoom(updatedRoom);
        }
        return updatedRoom;
      }
      return room;
    }));
  };

  const adjustTemp = (roomId: number, deviceId: number, change: number) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        const updatedDevices = room.devices.map(device => 
          device.id === deviceId && device.type === "ac"
            ? { ...device, temp: Math.max(16, Math.min(30, (device.temp || 24) + change)) }
            : device
        );
        const updatedRoom = { ...room, devices: updatedDevices };
        if (room.id === selectedRoom.id) {
          setSelectedRoom(updatedRoom);
        }
        return updatedRoom;
      }
      return room;
    }));
  };

  const getDeviceIcon = (type: string) => {
    const icons: Record<string, string> = {
      light: "💡",
      tv: "📺",
      ac: "❄️",
      speaker: "🔊",
      curtains: "🪟",
      fridge: "🧊",
      oven: "🔥",
      heater: "♨️",
      fan: "🌀",
      sprinkler: "💧",
      camera: "📹",
      door: "🚪",
    };
    return icons[type] || "📱";
  };

  const totalDevices = rooms.reduce((sum, room) => sum + room.devices.length, 0);
  const activeDevices = rooms.reduce((sum, room) => 
    sum + room.devices.filter(d => d.isOn).length, 0
  );

  const selectRoom = (room: any) => {
    setSelectedRoom(room);
    setView("room");
  };

  // Screen content component that will be used both with and without phone frame
  const ScreenContent = () => (
    <div className="h-full bg-gradient-to-b from-neutral-900 to-black overflow-y-auto">
      <AnimatePresence mode="wait">
        {view === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 pt-12"
          >
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-light text-white mb-2">My Home</h1>
              <p className="text-sm text-gray-400">Manage your smart devices</p>
            </div>

            {/* Status Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400">Active Devices</p>
                  <p className="text-3xl font-light text-white">{activeDevices}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(activeDevices / totalDevices) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {activeDevices} of {totalDevices} devices
              </p>
            </div>

            {/* Rooms Grid */}
            <div>
              <h2 className="text-lg font-light text-white mb-4">Rooms</h2>
              <div className="grid grid-cols-2 gap-4">
                {rooms.map((room) => {
                  const activeCount = room.devices.filter(d => d.isOn).length;
                  
                  return (
                    <motion.div
                      key={room.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => selectRoom(room)}
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer hover:border-white/20 transition-all"
                    >
                      <div className="text-4xl mb-3">{room.icon}</div>
                      <h3 className="text-sm text-white mb-1 font-light">{room.name}</h3>
                      <p className="text-xs text-gray-500 mb-3">{room.devices.length} devices</p>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          activeCount > 0 ? "bg-green-400" : "bg-gray-600"
                        }`} />
                        <span className="text-xs text-gray-400">
                          {activeCount > 0 ? `${activeCount} active` : "All off"}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h2 className="text-lg font-light text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌙</span>
                    <span className="text-sm text-white">Good Night Mode</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏃</span>
                    <span className="text-sm text-white">Leave Home</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="room"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="p-6 pt-12"
          >
            {/* Back Button & Header */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setView("home")}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{selectedRoom.icon}</span>
                  <h2 className="text-xl font-light text-white">{selectedRoom.name}</h2>
                </div>
                <p className="text-xs text-gray-500">
                  {selectedRoom.devices.filter(d => d.isOn).length} of {selectedRoom.devices.length} active
                </p>
              </div>
              <button
                onClick={() => toggleAllInRoom(selectedRoom.id)}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 transition-all"
              >
                Toggle All
              </button>
            </div>

            {/* Devices List */}
            <div className="space-y-4">
              {selectedRoom.devices.map((device) => (
                <motion.div
                  key={device.id}
                  layout
                  className={`rounded-2xl p-5 transition-all ${
                    device.isOn 
                      ? "bg-white/10 border border-white/20" 
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        device.isOn ? "bg-white/10" : "bg-white/5"
                      }`}>
                        <span className="text-2xl">{getDeviceIcon(device.type)}</span>
                      </div>
                      <div>
                        <p className="text-sm text-white font-light">{device.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{device.type}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleDevice(selectedRoom.id, device.id)}
                      className={`w-14 h-8 rounded-full transition-all relative ${
                        device.isOn ? "bg-white" : "bg-white/20"
                      }`}
                    >
                      <motion.div
                        animate={{ x: device.isOn ? 24 : 2 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute top-1 w-6 h-6 rounded-full bg-black"
                      />
                    </button>
                  </div>

                  {/* Temperature Control for AC */}
                  {device.type === "ac" && device.isOn && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 border-t border-white/10"
                    >
                      <p className="text-xs text-gray-500 mb-4 text-center">Temperature Control</p>
                      <div className="flex items-center justify-center gap-6">
                        <button
                          onClick={() => adjustTemp(selectedRoom.id, device.id, -1)}
                          className="w-12 h-12 border border-white/20 rounded-full text-white hover:bg-white/10 text-2xl flex items-center justify-center"
                        >
                          −
                        </button>
                        <div className="text-center">
                          <p className="text-5xl font-light text-white">{device.temp}°</p>
                          <p className="text-xs text-gray-500 mt-1">Celsius</p>
                        </div>
                        <button
                          onClick={() => adjustTemp(selectedRoom.id, device.id, 1)}
                          className="w-12 h-12 border border-white/20 rounded-full text-white hover:bg-white/10 text-2xl flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="p-4 md:p-8 flex justify-center">
      {/* Desktop: Phone Frame - Hidden on mobile/tablet */}
      <div className="hidden md:block relative w-[380px] h-[760px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-10" />
        
        {/* Screen Content */}
        <ScreenContent />

        {/* Home Indicator (iPhone style) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
      </div>

      {/* Mobile/Tablet: Full width without phone frame */}
      <div className="md:hidden w-full max-w-md mx-auto bg-gradient-to-b from-neutral-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        <ScreenContent />
      </div>
    </div>
  );
}

export default function CustomDevelopment() {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<"erp" | "iot">("erp");

  const capabilities = [
    {
      title: t('devService.capability1.title'),
      description: t('devService.capability1.desc'),
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: t('devService.capability2.title'),
      description: t('devService.capability2.desc'),
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: t('devService.capability3.title'),
      description: t('devService.capability3.desc'),
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    },
    {
      title: t('devService.capability4.title'),
      description: t('devService.capability4.desc'),
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: t('devService.capability5.title'),
      description: t('devService.capability5.desc'),
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      title: t('devService.capability6.title'),
      description: t('devService.capability6.desc'),
      icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    },
  ];

  const benefits = [
    t('devService.benefit1'),
    t('devService.benefit2'),
    t('devService.benefit3'),
    t('devService.benefit4'),
    t('devService.benefit5'),
    t('devService.benefit6'),
  ];

  const process = [
    {
      step: t('devService.step1.number'),
      title: t('devService.step1.title'),
      description: t('devService.step1.desc'),
    },
    {
      step: t('devService.step2.number'),
      title: t('devService.step2.title'),
      description: t('devService.step2.desc'),
    },
    {
      step: t('devService.step3.number'),
      title: t('devService.step3.title'),
      description: t('devService.step3.desc'),
    },
    {
      step: t('devService.step4.number'),
      title: t('devService.step4.title'),
      description: t('devService.step4.desc'),
    },
  ];

  const portfolioImages = [
    "/custom-dev/dev-portfolio-1.png",
    "/custom-dev/dev-portfolio-2.png",
    "/custom-dev/dev-portfolio-3.png",
    "/custom-dev/dev-portfolio-4.png",
  ];

  return (
    <main className="bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
            {t('devService.subtitle')}
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            {t('devService.title')}
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            {t('devService.description')}
          </p>

          <div className="flex gap-4">
            <Link 
              href="#demo"
              className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
            >
              {t('devService.demo')}
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-3 border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-all"
            >
              {t('contact.title')}
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t('devService.capabilities')}
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            {t('devService.capabilitiesDesc')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-4">
                  <svg 
                    className="w-10 h-10 text-white/80 group-hover:text-white transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={capability.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            {t('devService.benefits')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            {t('devService.process')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l border-white/20 pl-8"
              >
                <span className="text-5xl font-light text-gray-700 block mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-light text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            {t('devService.demo')}
          </h2>

          {/* Demo Tabs - STAYS IN ENGLISH */}
          <div className="flex justify-center gap-4 mb-8 border-b border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveDemo("erp")}
              className={`pb-4 px-4 md:px-6 text-sm font-light transition-colors relative whitespace-nowrap ${
                activeDemo === "erp" ? "text-white" : "text-gray-500"
              }`}
            >
              Custom ERP System
              {activeDemo === "erp" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                />
              )}
            </button>
            <button
              onClick={() => setActiveDemo("iot")}
              className={`pb-4 px-4 md:px-6 text-sm font-light transition-colors relative whitespace-nowrap ${
                activeDemo === "iot" ? "text-white" : "text-gray-500"
              }`}
            >
              IoT Smart Home
              {activeDemo === "iot" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                />
              )}
            </button>
          </div>

          {/* Demo Content */}
          <div className="border border-white/10 bg-black/50 overflow-hidden">
            {activeDemo === "erp" ? <CustomERPDemo /> : <IoTSmartHomeDemo />}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {t('devService.portfolio')}
            </h2>
            <p className="text-gray-400 max-w-2xl">
              {t('devService.portfolioDesc')}
            </p>
          </div>
          
          {/* 2 Column Mixed Size Layout - Equal Bottom Alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
            {/* Left Column: Two Landscape Images */}
            <div className="flex flex-col gap-8 h-full">
              {/* Top Landscape */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
                className="relative flex-1 min-h-0 overflow-hidden bg-neutral-900"
              >
                {portfolioImages[0]?.includes('portfolio-1') ? (
                  <img
                    src={portfolioImages[0]}
                    alt="Custom Development Project 1"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">Project 1</p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Bottom Landscape */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="relative flex-1 min-h-0 overflow-hidden bg-neutral-900"
              >
                {portfolioImages[1]?.includes('portfolio-2') ? (
                  <img
                    src={portfolioImages[1]}
                    alt="Custom Development Project 2"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 2</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column: Two Portrait Images */}
            <div className="flex flex-col gap-8 h-full">
              {/* Top Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex-1 min-h-0 overflow-hidden bg-neutral-900"
              >
                {portfolioImages[2]?.includes('portfolio-3') ? (
                  <img
                    src={portfolioImages[2]}
                    alt="Custom Development Project 3"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 3</p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Bottom Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="relative flex-1 min-h-0 overflow-hidden bg-neutral-900"
              >
                {portfolioImages[3]?.includes('portfolio-4') ? (
                  <img
                    src={portfolioImages[3]}
                    alt="Custom Development Project 4"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border border-white/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-600">Project 4</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t('devService.ctaButton')}
          </h2>
          <p className="text-gray-400 mb-12">
            {t('devService.cta')}
          </p>

          <form action="https://formspree.io/f/xdkwjyze" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-gray-400 mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">Project Type</label>
              <select 
                name="project_type"
                className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-all"
              >
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>ERP System</option>
                <option>IoT Solution</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">{t('contact.form.message')}</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-all resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
            >
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}